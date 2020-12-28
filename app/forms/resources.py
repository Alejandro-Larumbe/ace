from flask_wtf import FlaskForm
from wtforms import StringField, FileField, BooleanField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
# from app.models import Artist


class UploadResource(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    url = FileField('url', validators=[DataRequired()])
    instructor_id = IntegerField('instructor_id', validators=[DataRequired()])
    resource_type_id = IntegerField('resource_type_id', validators=[DataRequired()])
