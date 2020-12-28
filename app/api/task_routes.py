from flask import Blueprint, jsonify, request
from app.models import LessonTask, Lesson, db
from app.forms.tasks import TaskForm

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
  # print('---------------------', form.data)
  # print('------', request.cookies['csrf_token'])
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    task = LessonTask(
      duration = form.data['duration'],
      frequency = form.data['frequency'],
      instructions = form.data['instructions'],
      type_id = form.data['type_id'],
      lesson_id = form.data['lesson_id'],
      piece_id = form.data['piece_id'],
      book_id =  form.data['book_id']
    )
    db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict())
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# @task_routes.route('', methods=['POST'])
# def create_task():
