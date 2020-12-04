from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean

class AssignmentType(db.Model):
  __tablename__ = 'assignment_types'

  id = Column(Integer, primary_key=True)
  type = Column(String(50), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "type": self.id
    }
