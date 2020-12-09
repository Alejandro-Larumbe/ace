from flask import Blueprint, jsonify
from flask_login import login_required
from app.forms import
from app.models import Lesson, db


lesson_routes = Blueprint('lessons', __name__)

@lesson_routes.route('/', methods=['POST'])
def create_lesson():
  # lesson = Lesson{
  #   start_date = start.datetime
  # }
  console.log(request.data)
  return 'date'


@lesson_routes.route('/<int:id>')
def lessons(id):
  lessons = Lesson.query.filter(Lesson.instructor_id == id)
  return jsonify([lesson.to_dict] for lesson in lessons)
