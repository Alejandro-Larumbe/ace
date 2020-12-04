from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean
from .adult import Adult
from .child import Child

class Family(db.Model):
  __tablename__ = 'families'

  id = Column(Integer, primary_key=True)
  child_id = Column(Integer, ForeignKey(Child.id), nullable=False)
  parent_id = Column(Integer, ForeignKey(Adult.id), nullable=False)


  def to_dict(self):
    return {
      "id": self.id,
      "child_id":self.child_id,
      "parent_id":self.parent_id
    }
