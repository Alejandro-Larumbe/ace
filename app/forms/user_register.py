from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(   User.email == email).first()
    if user:
        raise ValidationError(f"User is already registered.")


class UserRegister(FlaskForm):
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), Email('please enter valid email'), user_exists])
    type = StringField('type')
    instructor_id = IntegerField('instructor_id')
