from .db import db
from .db import db
from .user import User

class Instructor(User):
  __tablename__ = 'instructors'

  id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
  studio_name = db.Column(db.String(50))
  studio_logo_url = db.Column(db.String(1000))
  students = db.relationship('Student', cascade='all, delete')

  __mapper_args__ = {
    'polymorphic_identity':'instructors',
  }

  def to_dict(self):
    return {
      "id": self.id,
      "studio_name": self.studio_name,
      "studio_logo_url": self.studio_logo
    }
