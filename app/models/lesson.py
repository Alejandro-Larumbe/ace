from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, DateTime, Boolean, DateTime, Numeric
from .adult import Adult
from .instructor import Instructor

class Lesson(db.Model):
  __tablename__ = 'lessons'

  id = Column(Integer, primary_key=True)
  start_time = Column(db.DateTime, nullable=False)
  end_time = Column(db.DateTime, nullable=False,)
  student_id = Column(Integer, ForeignKey(Adult.id), nullable=False)
  instructor_id = Column(Integer, ForeignKey(Instructor.id), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "start_time": str(self.start_time),
      "end_time": str(self.end_time),
      "student_id": self.student_id,
      "instructor_id": self.instructor_id
    }
