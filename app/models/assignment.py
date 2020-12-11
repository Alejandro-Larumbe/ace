from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, Date, Boolean
from .instructor import Instructor
from .adult import Adult
from .resource import Resource
from .piece import Piece
from .book import Book

class Assignment(db.Model):
  __tablename__ = 'assignments'

  id = Column(Integer, primary_key=True)
  date_assigned = Column(Date, nullable=False)
  is_completed = Column(Boolean)
  instructor_id = Column(Integer, ForeignKey(User.id), nullable=False)
  student_id = Column(Integer, ForeignKey(User.id), nullable=False)
  resource_id = Column(Integer, ForeignKey(Resource.id))
  piece_id = Column(Integer, ForeignKey(Piece.id))
  book_id = Column(Integer, ForeignKey(Book.id))

  def to_dict(self):
    return {
      "id": self.id,
      "date_assigned": self.date_assigned,
      "is_completed": self.is_completed,
      "instructor_id": self.instructor_id,
      "student_id": self.student_id,
      "resource_id": self.resource_id,
      "piece_id": self.piece_id,
      "book_id": self.book_id,
    }
