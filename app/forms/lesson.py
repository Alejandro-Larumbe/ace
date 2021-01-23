from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField, IntegerField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Lesson



def start_time_overlaps(form, field):
  print("Checking if start time does not overlap")
  start_time = field.data
  end_time = form.data['end_time']
  lesson_id = form.data['lesson_id']
  overlap = Lesson.query.filter(

    (Lesson.start_time <= start_time) & (Lesson.end_time > (start_time or end_time)) & (Lesson.id != lesson_id) |
    (Lesson.start_time < end_time) & (Lesson.end_time >= end_time) & (Lesson.id != lesson_id) |
    (Lesson.start_time >= start_time) & (Lesson.end_time <= end_time) & (Lesson.id != lesson_id)

  ).first()
  if overlap:
    raise ValidationError(f"you already have a leson scheduled")


class LessonForm(FlaskForm):
  start_time = StringField('start_time', validators=[DataRequired(), start_time_overlaps])
  end_time = StringField('end_time', validators=[DataRequired()])
  student_id = IntegerField('student_id', validators=[DataRequired()])
  lesson_id = IntegerField('lesson_id')
