from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField, IntegerField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError


def date_is_available():
  pass


class LessonForm(FlaskForm):
  start_time = StringField('start_time', validators=[DataRequired()])
  end_time = StringField('end_time', validators=[DataRequired()])
  student_id = SelectField('student_id', validators=[DataRequired()])
  rate = IntegerField('rate', validators=[DataRequired()])
