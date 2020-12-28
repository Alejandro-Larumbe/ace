from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean, Text

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
    }
