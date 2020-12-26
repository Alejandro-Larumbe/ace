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


  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "author": self.author
    }
