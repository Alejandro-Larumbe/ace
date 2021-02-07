from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean
from .book import Book
from .user import User

class Piece(db.Model):
  __tablename__ = 'pieces'

  id = Column(Integer, primary_key=True)
  title = Column(String(100), nullable=False)
  composer = Column(String(50))
  number = Column(Integer)
  book_id = Column(Integer, ForeignKey(Book.id))
  instructor_id = Column(Integer, ForeignKey(User.id), nullable=False)

  book = db.relationship('Book')

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "composer": self.composer,
      "number": self.number,
      "book_id": self.book_id,
      "instructor_id": self.instructor_id,
      # "book": self.book.title
    }


  def to_dict_camel(self):
    result = {
      "id": self.id,
      "title": self.title,
      "composer": self.composer,
      "number": self.number,
      "bookId": self.book_id,
      "instructorId": self.instructor_id,
      # "book": self.book.to_dict_camel()
      # "book": self.book.to
    }
    if self.book_id:
      book=self.book.to_dict()
      result["bookTitle"] = book['title']
    return result
