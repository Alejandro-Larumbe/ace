from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, DateTime, Boolean, DateTime, Numeric
from .adult import Adult
from .instructor import Instructor

class Lesson(db.Model):
  __tablename__ = 'lessons'

  id = Column(Integer, primary_key=True)
  datetime = Column(DateTime, nullable=False)
  duration = Column(Integer, nullable=False)
  rate = Column(Numeric(6,2), nullable=False)
  student_id = Column(Integer, ForeignKey(Adult.id), nullable=False)
  instructor_id = Column(Integer, ForeignKey(Instructor.id), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "datetime": self.datetime,
      "duration": self.duration,
      "rate": self.rate,
      "student_id": self.student_id,
      "instructor_id": self.instructor_id
    }
