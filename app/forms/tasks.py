from flask_wtf import FlaskForm
from wtforms import StringField, FileField, BooleanField, IntegerField, TextField
from wtforms.validators import DataRequired, Email, ValidationError


class TaskForm(FlaskForm):
    duration = StringField('title', validators=[DataRequired()])
    frequency = FileField('frequency')
    instructions = TextField('instructions')
    type_id = IntegerField('type_id')
    lesson_id = IntegerField('lesson_id')
    piece_id = IntegerField('piece_id')
    book_id = IntegerField('book_id')
    is_completed = BooleanField('is_completed')
