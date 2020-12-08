from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User




class UserUpdateForm(FlaskForm):
    first_name = StringField('firstName', validators=[DataRequired()])
    last_name = StringField('lastName', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), Email('please enter valid email')])
    phone_number = StringField('phoneNumber')
    address = StringField('phoneNumber')
