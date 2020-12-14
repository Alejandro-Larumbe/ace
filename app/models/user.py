from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    profile_pic_url = db.Column(db.String(1000))
    phone_number = db.Column(db.String(30))
    email = db.Column(db.String(255), nullable=False, unique=True)
    address = db.Column(db.String(500))
    hashed_password = db.Column(db.String(255), nullable=False)
    type = db.Column(db.String(50))

    instructor = db.relationship('Instructor', cascade='all, delete')
    adult = db.relationship('Adult', cascade='all, delete')


    # studio_name = db.relationship('Instructor', cascade='all, delete')
    # studio_logo_url = db.relationship('Instructor', cascade='all, delete')
    # is_student = db.relationship('Adult', cascade='all, delete')
    # is_parent = db.relationship('Adult', cascade='all, delete')
    # instructor_id = db.relationship('Adult', cascade='all, delete')

    __mapper_args__ = {
        'polymorphic_on': type,
        'polymorphic_identity': 'users'
    }

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
                "id": self.id,
                "email": self.email,
                "first_name": self.first_name,
                "last_name": self.last_name,
                "phone_number": self.phone_number,
                "profile_pic_url": self.profile_pic_url,
                "email": self.email,
                "address": self.address,
                "type": self.type
            }
