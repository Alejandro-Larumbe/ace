from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean

class ResourceCollection(db.Model):
  __tablename__ = 'resource_collections'

  id = Column(Integer, primary_key=True)
  collection = Column(String(30), nullable=False)


  def to_dict(self):
    return {
      "id": self.id,
      "collection": self.collection
    }
