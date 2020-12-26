from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired



class BookForm(FlaskForm):
  title = StringField('title', validators=[DataRequired()])
  author = StringField('author')
  instructor_id = IntegerField('instructor_id', validators=[DataRequired()])




class PieceForm(FlaskForm):
  title = StringField('title', validators=[DataRequired()])
  composer = StringField('composer')
  number = IntegerField('number')
  book_id = IntegerField('book_id')
  instructor_id = IntegerField('instructor_id', validators=[DataRequired()])
