from pydantic import BaseModel, EmailStr
from typing import List, Optional, Dict, Any
from datetime import datetime, date
from uuid import UUID

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    career_goal: Optional[str] = None
    photo_url: Optional[str] = None
    time_spent: Optional[int] = None
    problems_solved: Optional[int] = None

class UserProfile(UserBase):
    id: UUID
    career_goal: Optional[str] = None
    member_level: str
    photo_url: Optional[str] = None
    time_spent: int
    problems_solved: int
    created_at: datetime

    class Config:
        orm_mode = True

class TestScoreBase(BaseModel):
    course_id: str
    module_index: int
    score: int

class TestScoreCreate(TestScoreBase):
    pass

class TestScore(TestScoreBase):
    id: int
    user_id: UUID
    created_at: datetime

    class Config:
        orm_mode = True

class ScheduleItemBase(BaseModel):
    module_index: int
    title: str
    level: str
    weeks: int
    start_date: date
    end_date: date
    status: str
    status_label: str
    pace: str
    skills: List[str]

class ScheduleBase(BaseModel):
    course_id: str

class ScheduleCreate(ScheduleBase):
    items: List[ScheduleItemBase]

class Schedule(ScheduleBase):
    id: UUID
    user_id: UUID
    created_at: datetime
    items: List[ScheduleItemBase]

    class Config:
        orm_mode = True
