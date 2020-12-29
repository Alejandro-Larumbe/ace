from .db import db
from .user import User
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, DateTime, Boolean, DateTime, Numeric
from .adult import Adult
from .instructor import Instructor
from app.api.utils import get_month

class Lesson(db.Model):
  __tablename__ = 'lessons'

  id = Column(Integer, primary_key=True)
  start_time = Column(db.DateTime, nullable=False)
  end_time = Column(db.DateTime, nullable=False)
  student_id = Column(Integer, ForeignKey(User.id), nullable=False)
  instructor_id = Column(Integer, ForeignKey(User.id), nullable=False)

  instructor = db.relationship('User', foreign_keys=[instructor_id])
  student = db.relationship('User', foreign_keys=[student_id])
  tasks = db.relationship('LessonTask', cascade='all, delete-orphan')


  def to_dict(self):
    return {
      "id": self.id,
      "start_time": str(self.start_time),
      "end_time": str(self.end_time),
      "student_id": self.student_id,
      "instructor_id": self.instructor_id,
      "student_first_name": self.student.first_name,
      "student_last_name": self.student.last_name,
      "profile_pic_url": self.student.profile_pic_url,
      "tasks": [task.to_dict() for task in self.tasks]
    }


  def to_dict_camel(self):
    return {
      "id": self.id,
      "startTime": str(self.start_time),
      "endTime": str(self.end_time),
      "studentId": self.student_id,
      "instructorId": self.instructor_id,
      "studentFirstName": self.student.first_name,
      "studentLastName": self.student.last_name,
      "profilePicUrl": self.student.profile_pic_url
    }


  def to_dict_camel_tasks(self):
    return {
      "id": self.id,
      "startTime": str(self.start_time),
      "endTime": str(self.end_time),
      "studentId": self.student_id,
      # "instructorId": self.instructor_id,
      "studentFirstName": self.student.first_name,
      "studentLastName": self.student.last_name,
      "profilePicUrl": self.student.profile_pic_url,
      "tasks": [task.to_dict_camel() for task in self.tasks]
    }
