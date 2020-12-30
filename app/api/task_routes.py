from flask import Blueprint, jsonify, request
from app.models import LessonTask, Lesson, db
from sqlalchemy import extract, Date, cast
from operator import itemgetter

from app.forms.tasks import TaskForm
import datetime

task_routes = Blueprint('task_routes', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@task_routes.route('', methods=['POST'])
def create_task():
  form = TaskForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    task = LessonTask(
      duration = form.data['duration'],
      frequency = form.data['frequency'],
      instructions = form.data['instructions'],
      type_id = form.data['type_id'],
      lesson_id = form.data['lesson_id'],
      piece_id = form.data['piece_id'],
      book_id =  form.data['book_id'],
      is_completed =  form.data['is_completed']
    )
    db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict_camel())
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@task_routes.route('instructor/<int:id>/date/<int:year>/<int:month>/<int:day>/')
def get_lesson_tasks_instructor(id, year, month, day):
  month = month + 1
  date = datetime.date(year, month, day)
  # lessons = Lesson.query.filter(cast(Lesson.start_time, Date) == date, Lesson.instructor_id == id).all()
  lessons = Lesson.query.filter(cast(Lesson.start_time, Date) == date, Lesson.instructor_id == id).order_by(cast(Lesson.start_time, Date)).all()

  by_id = {}
  for lesson in lessons:
    by_id[lesson.id] = lesson.to_dict_camel_tasks()
  print('----------', by_id )
  return jsonify({'byId': by_id})

  # return 'hi'
