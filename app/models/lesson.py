from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, DateTime, Boolean, DateTime, Numeric
from .adult import Adult
from .instructor import Instructor
from app.api.utils import get_month

class Lesson(db.Model):
  __tablename__ = 'lessons'

  id = Column(Integer, primary_key=True)
  start_time = Column(db.DateTime, nullable=False)
  end_time = Column(db.DateTime, nullable=False,)
  student_id = Column(Integer, ForeignKey(Adult.id), nullable=False)
  instructor_id = Column(Integer, ForeignKey(Instructor.id), nullable=False)

  student_first_name = db.relationship('Adult')
  student_last_name = db.relationship('Adult')

  # @property
  # def return_month(self):
  #   return self.start_time.month


  # @month.setter
  # def month(self):
  #   self.month = self.start_time.month


  def to_dict(self):
    return {
      "id": self.id,
      "start_time": str(self.start_time),
      "end_time": str(self.end_time),
      "student_id": self.student_id,
      "instructor_id": self.instructor_id,
      "student_first_name": self.adult.first_name,
      "student_last_name": self.adult.last_name
    }
