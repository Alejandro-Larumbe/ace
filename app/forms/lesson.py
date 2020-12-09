from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

def date_is_not_available(form, fiend):
  pass

class LessonForm(FlaskForm):
  start_time = DateTimeField('startDate')
  end_time = DateTimeField('endDate')
  student_id = IntegerField('studentId', format validators=[DataRequired()])
