from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date

class Child(db.Model):
  __tablename__ = 'children'

  id = Column(Integer, primary_key=True)
  first_name= Column(String(30), nullable=False)
  last_name= Column(String(30), nullable=False)
  dob= Column(Date, nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "first_name": self.first_name,
      "last_name": self.last_name,
      "dob": self.last_name
    }
