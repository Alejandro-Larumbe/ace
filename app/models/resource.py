from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean

class Resource(db.Model):
  __tablename__ = 'resources'

  id = Column(Integer, primary_key=True)
  name = Column(String(100), nullable=False)
  url = Column(String(1000), nullable=False)
  instructor_id = Column(Integer, nullable=False)
  resource_type_id = Column(Integer, ForeignKey("resource_types.id"), nullable=False)


  def to_dict(self):
    return {
      "id": self.id,
      "resource_type": self.type,
      "name": self.name,
      "url": self.url,
      "instructor_id": self.instructor_id
    }