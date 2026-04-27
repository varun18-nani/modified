from fastapi import FastAPI, Depends, HTTPException, status, File, UploadFile
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from jose import JWTError, jwt
from datetime import datetime, timedelta
import os
import shutil
import random
from uuid import UUID

from . import models, schemas, auth, database
from .database import engine, get_db

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Career Roadmap API", version="2.0.0")

# Security
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/token")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Helper to get current user from token
async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, auth.SECRET_KEY, algorithms=[auth.ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = schemas.TokenData(email=email)
    except JWTError:
        raise credentials_exception
    user = db.query(models.User).filter(models.User.email == token_data.email).first()
    if user is None:
        raise credentials_exception
    return user

# =============================================
# AUTH ENDPOINTS
# =============================================

@app.post("/api/auth/register", response_model=schemas.UserProfile)
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = auth.get_password_hash(user.password)
    new_user = models.User(
        email=user.email,
        password_hash=hashed_password,
        full_name=user.full_name
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@app.post("/api/auth/token", response_model=schemas.Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == form_data.username).first()
    if not user or not auth.verify_password(form_data.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

# =============================================
# USER PROFILE & PROGRESS
# =============================================

@app.get("/api/user/profile", response_model=schemas.UserProfile)
async def read_user_profile(current_user: models.User = Depends(get_current_user)):
    return current_user

@app.patch("/api/user/profile", response_model=schemas.UserProfile)
async def update_user_profile(
    profile_update: schemas.UserUpdate, 
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if profile_update.full_name is not None:
        current_user.full_name = profile_update.full_name
    if profile_update.career_goal is not None:
        current_user.career_goal = profile_update.career_goal
    if profile_update.photo_url is not None:
        current_user.photo_url = profile_update.photo_url
    if profile_update.time_spent is not None:
        current_user.time_spent = profile_update.time_spent
    if profile_update.problems_solved is not None:
        current_user.problems_solved = profile_update.problems_solved
    if profile_update.daily_hours is not None:
        current_user.daily_hours = profile_update.daily_hours
    if profile_update.video_progress is not None:
        # Merge progress or replace
        current_user.video_progress = profile_update.video_progress
    if profile_update.completed_skills is not None:
        current_user.completed_skills = profile_update.completed_skills
    
    db.commit()
    db.refresh(current_user)
    return current_user

@app.get("/api/user/progress")
async def get_user_progress(
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    scores = db.query(models.TestScore).filter(models.TestScore.user_id == current_user.id).all()
    schedules = db.query(models.Schedule).filter(models.Schedule.user_id == current_user.id).all()
    
    # Structure data for frontend compatibility
    score_map = {}
    for s in scores:
        if s.course_id not in score_map:
            score_map[s.course_id] = {}
        score_map[s.course_id][str(s.module_index)] = s.score
        
    schedule_list = []
    for sch in schedules:
        items = db.query(models.ScheduleItem).filter(models.ScheduleItem.schedule_id == sch.id).all()
        schedule_list.append({
            "course_id": sch.course_id,
            "items": items
        })

    total_tests = len(scores)
    avg_score = 0
    if total_tests > 0:
        avg_score = round(sum(s.score for s in scores) / total_tests)

    return {
        "user_id": str(current_user.id),
        "profile": {
            "name": current_user.full_name,
            "email": current_user.email,
            "goal": current_user.career_goal,
            "photoURL": current_user.photo_url
        },
        "stats": {
            "total_tests_taken": total_tests,
            "average_score": avg_score,
            "time_spent": current_user.time_spent,
            "problems_solved": current_user.problems_solved,
            "member_level": "Senior" if total_tests > 10 else "Intermediate" if total_tests > 5 else "Junior"
        },
        "dailyHours": current_user.daily_hours,
        "videoProgress": current_user.video_progress,
        "completedSkills": current_user.completed_skills,
        "scores": score_map,
        "schedules": schedule_list
    }

@app.post("/api/upload")
async def upload_file(
    file: UploadFile = File(...),
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    upload_dir = os.path.join(FRONTEND_DIR, "uploads")
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)
    
    file_path = os.path.join(upload_dir, f"{current_user.id}_{file.filename}")
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    photo_url = f"/uploads/{current_user.id}_{file.filename}"
    current_user.photo_url = photo_url
    db.commit()
    
    return {"photoURL": photo_url}

# =============================================
# TEST SCORES
# =============================================

@app.post("/api/test/save")
async def save_test_score(
    score_data: schemas.TestScoreCreate,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Check if exists, update or create
    existing = db.query(models.TestScore).filter(
        models.TestScore.user_id == current_user.id,
        models.TestScore.course_id == score_data.course_id,
        models.TestScore.module_index == score_data.module_index
    ).first()
    
    if existing:
        existing.score = score_data.score
        existing.created_at = datetime.utcnow()
    else:
        new_score = models.TestScore(
            user_id=current_user.id,
            course_id=score_data.course_id,
            module_index=score_data.module_index,
            score=score_data.score
        )
        db.add(new_score)
    
    db.commit()
    return {"success": True}

# =============================================
# SCHEDULE
# =============================================

@app.post("/api/schedule/save")
async def save_schedule(
    schedule_data: schemas.ScheduleCreate,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Remove old schedule for this course
    old_sch = db.query(models.Schedule).filter(
        models.Schedule.user_id == current_user.id,
        models.Schedule.course_id == schedule_data.course_id
    ).first()
    if old_sch:
        db.query(models.ScheduleItem).filter(models.ScheduleItem.schedule_id == old_sch.id).delete()
        db.delete(old_sch)
    
    new_sch = models.Schedule(
        user_id=current_user.id,
        course_id=schedule_data.course_id
    )
    db.add(new_sch)
    db.commit()
    db.refresh(new_sch)
    
    for item in schedule_data.items:
        db_item = models.ScheduleItem(
            schedule_id=new_sch.id,
            module_index=item.module_index,
            title=item.title,
            level=item.level,
            weeks=item.weeks,
            start_date=item.start_date,
            end_date=item.end_date,
            status=item.status,
            status_label=item.status_label,
            pace=item.pace,
            skills=item.skills
        )
        db.add(db_item)
    
    db.commit()
    return {"success": True}

# =============================================
# PASSWORD RESET (OTP)
# =============================================

@app.post("/api/auth/otp/send")
async def send_otp(request: schemas.OTPRequest, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == request.email).first()
    if not user:
        # Don't reveal if user exists for security, but for this app let's be helpful
        raise HTTPException(status_code=404, detail="User not found")
    
    otp_code = "".join([str(random.randint(0, 9)) for _ in range(6)])
    expires_at = datetime.utcnow() + timedelta(minutes=10)
    
    # Save OTP
    db_otp = models.OTP(email=request.email, otp_code=otp_code, expires_at=expires_at)
    db.add(db_otp)
    db.commit()
    
    print(f"DEBUG: OTP for {request.email} is {otp_code}") # For user to see in terminal
    
    return {"success": True, "message": "OTP sent (check server terminal for code)"}

@app.post("/api/auth/otp/reset")
async def reset_password(request: schemas.OTPVerify, db: Session = Depends(get_db)):
    db_otp = db.query(models.OTP).filter(
        models.OTP.email == request.email,
        models.OTP.otp_code == request.otp,
        models.OTP.is_used == 0,
        models.OTP.expires_at > datetime.utcnow()
    ).first()
    
    if not db_otp:
        raise HTTPException(status_code=400, detail="Invalid or expired OTP")
    
    user = db.query(models.User).filter(models.User.email == request.email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    user.password_hash = auth.get_password_hash(request.new_password)
    db_otp.is_used = 1
    db.commit()
    
    return {"success": True, "message": "Password reset successfully"}


# Root and Static files
@app.get("/api")
def root():
    return {"message": "Career Roadmap PostgreSQL API is running 🚀", "version": "2.0.0"}

FRONTEND_DIR = os.path.dirname(os.path.dirname(__file__))
uploads_dir = os.path.join(FRONTEND_DIR, "uploads")
if not os.path.exists(uploads_dir):
    os.makedirs(uploads_dir)

app.mount("/uploads", StaticFiles(directory=uploads_dir), name="uploads")
app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="static")
