from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField, IntegerField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError


# def ends_before_it_starts(form, field):
#   print(-----------)
#   pass

# def ends_after


class LessonForm(FlaskForm):
  start_time = StringField('start_time', validators=[DataRequired()])
  end_time = StringField('end_time', validators=[DataRequired()])
  student_id = IntegerField('student_id', validators=[DataRequired()])
