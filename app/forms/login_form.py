from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def account_type(form, field):
    print("Checking if user exists with type of account")
    type = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if user and user.type != type:
        if user.type == 'adults':
            raise ValidationError(f"user exists with an student account.")
        else:
            raise ValidationError(f"user exists with an instructor account.")



def user_exists(form, field):
    print("Checking if user exists", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("Email provided not found.")


def password_matches(form, field):
    print("Checking if password matches")
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("No such user exists.")
    if not user.check_password(password):
        raise ValidationError("Password was incorrect.")


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired(), password_matches])
    type = StringField('type', validators=[DataRequired(), account_type])
