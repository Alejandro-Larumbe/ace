from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean

class TaskType(db.Model):
  __tablename__ = 'task_types'

  id = Column(Integer, primary_key=True)
  type = Column(String(30), nullable=False)


  def to_dict(self):
    return {
      "id": self.id,
      "type": self.type
    }
