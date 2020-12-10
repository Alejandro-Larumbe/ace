from flask import Blueprint, jsonify
from flask_login import login_required
from app.forms import LessonForm
from app.models import Lesson, db
from flask import request
from datetime import datetime
from .utils import get_month


lesson_routes = Blueprint('lesson_routes', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


# def split_date_string(str):
#   print('str--------', str)
#   date_list = str.split()
#   time_split = date_list[4].split(':')
#   month_hash = { 'Jan' : 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12  }
#   date_dict = {
#     'year': int(date_list[3]),
#     'month': int(month_hash[date_list[1]]),
#     'day': int(date_list[2]),
#     'hour': int(time_split[0]),
#     'minute': int(time_split[1]),
#     'second': int(time_split[2]),
#   }
#   print('date_to_dic-----------------', date_dict)
#   return date_dict


# def date_format(str):
#   # str = str[-1]
#   return datetime(str, "%a %b %d %Y %H:%M:%S")

@lesson_routes.route('/instructor/<int:id>', methods=['POST'])
def create_lesson(id):
  form = LessonForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  # print('form data---------------', form.data['start_time'])
  # print('Type: ',type(form.data['start_time']))
  if form.validate_on_submit():
    lesson = Lesson(
      start_time = form.data['start_time'],
      end_time = form.data['end_time'],
      student_id = int(form.data['student_id']),
      instructor_id = id
    )
    db.session.add(lesson)
    db.session.commit()
    return jsonify(lesson.to_dict())
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@lesson_routes.route('/instructor/<int:id>')
def lessons(id):
  lessons = Lesson.query.filter(Lesson.instructor_id == id)
  return jsonify([lesson.to_dict] for lesson in lessons)

@lesson_routes.route('/<int:id>/schedule')
def get_schedule(id):
  request_month = get_month(request.get_json()['date'])
  lessons = Lesson.query.filter(Lesson.instructor_id == id).all()
  month = [lesson.to_dict() for lesson in lessons if lesson.start_time.month == request_month]
  return jsonify(month)




  # lessons = Lesson.query.filter(Lesson.id == 344).one()
  # lessons = Lesson.query.filter(Lesson.instructor_id == id).all()
  # result = [lesson.to_dict() for lesson in lessons if get_month(lesson.start_time) == request_month]
  # print([lesson.to_dict() for lesson in lessons])
  # print('month-------', lessons.start_time.month)
  # print(result)
  # return jsonify(result)
  # return 'hi'
