from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean, Text
from .piece import Piece

class LessonTask(db.Model):
  __tablename__ = 'lesson_tasks'

  id = Column(Integer, primary_key=True)
  duration = Column(Integer)
  frequency = Column(Integer)
  instructions = Column(Text)
  type_id = Column(Integer, ForeignKey("resource_types.id"))
  lesson_id = Column(Integer, ForeignKey("lessons.id"))
  piece_id = Column(Integer, ForeignKey("pieces.id"))
  book_id = Column(Integer, ForeignKey("books.id"))

  book = db.relationship('Book')
  piece = db.relationship('Piece')

  def to_dict(self):
    return {
      "id": self.id,
      "duration": self.duration,
      "frequency": self.frequency,
      "instructions": self.instructions,
      "type_id": self.type_id,
      "lesson_id": self.lesson_id,
      "piece_id": self.piece_id,
      "book_id": self.book_id,
      "piece_title": self.piece
    }

  def to_dict_camel(self):
    return {
      "id": self.id,
      "duration": self.duration,
      "frequency": self.frequency,
      "instructions": self.instructions,
      "typeId": self.type_id,
      "lessonId": self.lesson_id,
      "pieceId": self.piece_id,
      "bookId": self.book_id,
      "pieceTitle": self.piece.title
    }
