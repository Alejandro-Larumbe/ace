from .db import db
from .user import User
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean

class Book(db.Model):
  __tablename__ = 'books'

  id = Column(Integer, primary_key=True)
  title = Column(String(100), nullable=False)
  author = Column(String(100))
  instructor_id = Column(Integer, ForeignKey(User.id), nullable=False)

  pieces= db.relationship('Piece', cascade='all, delete-orphan')

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "author": self.author,
      "instructor_id": self.instructor_id,
    }


  def to_dict_camel(self):
    return {
      "id": self.id,
      "title": self.title,
      "author": self.author,
      "instructorId": self.instructor_id,
    }
