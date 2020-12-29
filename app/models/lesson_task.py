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
  is_completed = Column(Boolean)
  lesson_id = Column(Integer, ForeignKey("lessons.id"))
  type_id = Column(Integer, ForeignKey("task_types.id"))
  piece_id = Column(Integer, ForeignKey("pieces.id"))
  book_id = Column(Integer, ForeignKey("books.id"))

  lesson = db.relationship('Lesson')
  book = db.relationship('Book')
  piece = db.relationship('Piece')
  type = db.relationship('TaskType')

  def to_dict(self):
    return {
      "id": self.id,
      "duration": self.duration,
      "frequency": self.frequency,
      "instructions": self.instructions,
      "is_completed": self.is_completed,
      "type_id": self.type_id,
      "lesson_id": self.lesson_id,
      "piece_id": self.piece_id,
      "book_id": self.book_id,
      "piece_title": self.piece
    }

  def to_dict_camel(self):
    result = {
      "id": self.id,
      "duration": self.duration,
      "frequency": self.frequency,
      "instructions": self.instructions,
      "typeId": self.type_id,
      "lessonId": self.lesson_id,
      "pieceId": self.piece_id,
      "bookId": self.book_id,
      "isCompleted": self.is_completed,
    }
    if self.piece_id:
      piece = self.piece.to_dict()
      result['pieceTitle'] = piece['title']
      # result['piece_title'] = piece.title

    if self.book_id:
      book = self.book.to_dict()
      result['bookTitle'] = book['title']

    if self.type_id:
      type = self.type.to_dict()
      result['type'] = type['type']

    return result
    # if self.piece_id:
    #   result["lesson.piece.title"] = self.piece.title
