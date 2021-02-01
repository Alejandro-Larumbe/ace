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
  print('form data-----------', form.data)
  if form.validate_on_submit():
    task = LessonTask(
      # duration = form.data['duration'] or None,
      frequency = form.data['frequency'],
      instructions = form.data['instructions'],
      type_id = form.data['type_id'],
      lesson_id = form.data['lesson_id'],
      piece_id = form.data['piece_id'],
      book_id =  form.data['book_id'],
      is_completed =  form.data['is_completed']
    )
    print('here---------')
    print('---------')
    db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict_camel())
  print(form.errors)
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@task_routes.route('/<int:id>', methods=['PUT'])
def update_task(id):
  form = TaskForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  print('form data-----------', form.data)
  if form.validate_on_submit():
    task = LessonTask.query.get(id)
    task.duration = form.data['duration'],
    task.frequency = form.data['frequency'],
    task.instructions = form.data['instructions'],
    task.type_id = form.data['type_id'],
    task.lesson_id = form.data['lesson_id'],
    task.piece_id = form.data['piece_id'],
    task.book_id =  form.data['book_id'],
    task.is_completed =  form.data['is_completed']

    print('here---------')
    print('---------')
    # db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict_camel())
  print(form.errors)
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@task_routes.route('/<int:id>', methods=['DELETE'])
def delete_task(id):
  try:
    task = LessonTask.query.get(id)
    db.session.delete(task)
    db.session.commit()
    return 'task deleted'
  except:
    # print(error)
    return {'errors': 'error'}, 401



@task_routes.route('instructor/<int:id>/date/<int:year>/<int:month>/<int:day>/')
def get_lesson_tasks_instructor(id, year, month, day):
  month = month + 1
  date = datetime.date(year, month, day)
  # lessons = Lesson.query.filter(cast(Lesson.start_time, Date) == date, Lesson.instructor_id == id).all()
  lessons = Lesson.query.filter(cast(Lesson.start_time, Date) == date, Lesson.instructor_id == id).order_by(cast(Lesson.start_time, Date)).all()

  by_id = {}
  for lesson in lessons:
    by_id[lesson.id] = lesson.to_dict_camel_tasks()
  return jsonify({'byId': by_id})

  # return 'hi'
