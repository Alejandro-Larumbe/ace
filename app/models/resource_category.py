from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean

class ResourceCategory(db.Model):
  __tablename__ = 'resource_categories'

  id = Column(Integer, primary_key=True)
  category = Column(String(30), nullable=False)


  def to_dict(self):
    return {
      "id": self.id,
      "category": self.category
    }
