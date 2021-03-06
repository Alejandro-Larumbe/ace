from .db import db
from sqlalchemy.schema import ForeignKey
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .user import User


class Adult(User):
  __tablename__ = 'adults'

  id = db.Column(db.Integer, ForeignKey('users.id'), primary_key = True)
  dob = db.Column(db.Date)
  is_student = db.Column(db.Boolean)
  is_parent = db.Column(db.Boolean)
  instructor_id = db.Column(db.Integer, ForeignKey("instructors.id"), nullable = False)

  # lessons = db.relationship('Lesson', foreign_keys=[in_id], cascade='all, delete')

  # user = db.relationship('User', cascade='all, delete')
  lessons = db.relationship('Lesson', cascade='all, delete')

  # lessons = db.relationship('Lesson')

  __mapper_args__ = {
    'polymorphic_identity':'adults',
  }


  def to_dict(self):
    user_dict = super().to_dict()
    user_dict.update({
      "dob": self.dob,
      "is_student": self.is_student,
      "is_parent": self.is_parent,
      "instructor_id": self.instructor_id
    })

    return user_dict


  def to_dict_camel(self):
    user_dict_camel = super().to_dict_camel()
    user_dict_camel.update({
      "dob": self.dob,
      "isStudent": self.is_student,
      "isParent": self.is_parent,
      "instructorId": self.instructor_id
    })

    return user_dict_camel
