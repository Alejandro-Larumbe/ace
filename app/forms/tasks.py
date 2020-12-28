from flask_wtf import FlaskForm
from wtforms import StringField, FileField, BooleanField, IntegerField, TextField
from wtforms.validators import DataRequired, Email, ValidationError


class TaskForm(FlaskForm):
    duration = StringField('title', validators=[DataRequired()])
    frequency = FileField('url', validators=[DataRequired()])
    instructions = TextField('instructions')
    type_id = IntegerField('lesson_id')
    lesson_id = IntegerField('lesson_id')
    piece_id = IntegerField('piece_id')
    book_id = IntegerField('piece_id')
