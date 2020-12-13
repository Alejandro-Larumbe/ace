from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean
from .user import User


class Invoice(db.Model):
  __tablename__ = 'invoices'

  id = Column(Integer, primary_key=True)
  date = Column(Date, nullable=False)
  term = Column(String(50), nullable=False)
  isPayed = Column(Boolean)
  student_id = Column(Integer, ForeignKey(User.id), nullable=False)
  instuctor_id = Column(Integer, ForeignKey(User.id), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "date": self.date,
      "term": self.term,
      "isPayed": self.isPayed,
      "student_id": self.student_id,
      "instuctor_id": self.instuctor_id
    }
