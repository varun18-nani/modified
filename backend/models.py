from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, JSON, UUID, Date
from sqlalchemy.orm import relationship
from .database import Base
from datetime import datetime
import uuid

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    full_name = Column(String)
    career_goal = Column(String)
    member_level = Column(String, default="Junior")
    photo_url = Column(String)
    time_spent = Column(Integer, default=0)
    problems_solved = Column(Integer, default=0)
    daily_hours = Column(Integer, default=2)
    video_progress = Column(JSON, default={})
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    test_scores = relationship("TestScore", back_populates="user")
    schedules = relationship("Schedule", back_populates="user")

class Career(Base):
    __tablename__ = "careers"

    id = Column(String, primary_key=True) # slug like 'data-science'
    title = Column(String, nullable=False)
    description = Column(String)
    icon = Column(String)
    job_guide_resume = Column(String)
    job_guide_portfolio = Column(String)
    job_guide_interview = Column(String)

    milestones = relationship("Milestone", back_populates="career")
    playlists = relationship("Playlist", back_populates="career")

class Milestone(Base):
    __tablename__ = "milestones"

    id = Column(Integer, primary_key=True, index=True)
    career_id = Column(String, ForeignKey("careers.id"))
    level = Column(String)
    title = Column(String)
    hours_needed = Column(Integer)
    skills = Column(JSON) # List of {name, desc, importance}

    career = relationship("Career", back_populates="milestones")

class Playlist(Base):
    __tablename__ = "playlists"

    id = Column(String, primary_key=True)
    career_id = Column(String, ForeignKey("careers.id"))
    title = Column(String)
    youtube_id = Column(String)
    author = Column(String)
    test_type = Column(String)
    quiz_data = Column(JSON)
    task_data = Column(String)

    career = relationship("Career", back_populates="playlists")

class TestScore(Base):
    __tablename__ = "test_scores"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    course_id = Column(String)
    module_index = Column(Integer)
    score = Column(Integer)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="test_scores")

class Schedule(Base):
    __tablename__ = "schedules"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    course_id = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="schedules")
    items = relationship("ScheduleItem", back_populates="schedule")

class ScheduleItem(Base):
    __tablename__ = "schedule_items"

    id = Column(Integer, primary_key=True, index=True)
    schedule_id = Column(UUID(as_uuid=True), ForeignKey("schedules.id"))
    module_index = Column(Integer)
    title = Column(String)
    level = Column(String)
    weeks = Column(Integer)
    start_date = Column(Date)
    end_date = Column(Date)
    status = Column(String)
    status_label = Column(String)
    pace = Column(String)
    skills = Column(JSON)

    schedule = relationship("Schedule", back_populates="items")
