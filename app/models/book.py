from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean

class Book(db.Model):
  __tablename__ = 'books'

  id = Column(Integer, primary_key=True)
  title: String(100)
  author: String(100)


  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "author": self.author
    }
