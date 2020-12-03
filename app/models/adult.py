from .db import db
from .user import User
from sqlalchemy.schema import Column, ForeignKey


class Adult(User):
  __tablename__ = 'adults'

  id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
  isParent = db.Column(db.Boolean)
  instructor_id = db.Column(db.Integer, ForeignKey("instructors.id"))

  __mapper_args__ = {
    'polymorphic_identity':'adults',
  }

  def to_dict(self):
    return {
      "id": self.id
    }
