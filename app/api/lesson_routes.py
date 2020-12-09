from flask import Blueprint, jsonify
from flask_login import login_required
from app.forms import LessonForm
from app.models import Lesson, db
from flask import request
from datetime import datetime


lesson_routes = Blueprint('lesson_routes', __name__)

def split_date_string(str):
  print('str--------', str)
  date_list = str.split()
  time_split = date_list[4].split(':')
  month_hash = { 'Jan' : 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12  }
  date_dict = {
    'year': int(date_list[3]),
    'month': int(month_hash[date_list[1]]),
    'day': int(date_list[2]),
    'hour': int(time_split[0]),
    'minute': int(time_split[1]),
    'second': int(time_split[2]),
  }
  print('date_to_dic-----------------', date_dict)
  return date_dict


# def date_format(str):
#   # str = str[-1]
#   return datetime(str, "%a %b %d %Y %H:%M:%S")

@lesson_routes.route('/instructor/<int:id>', methods=['POST'])
def create_lesson(id):
  form = LessonForm()
  # print('start time--------------------------', form.data['start_time'])
  # print('alicw start time--------------------------', form.data['start_time'][1:-1])
  # start_time = date_format(form.data['start_time'])
  print('---------------------------', form.data)
  # std = split_date_string(form.data['start_time'])
  # etd = split_date_string(form.data['end_time'])


  lesson = Lesson(
  #   start_time = datetime(std['year'], std['month'], std['day'], std['hour'], std['minute'], std['second']),
  #   end_time = datetime(etd['year'], etd['month'], etd['day'], etd['hour'], etd['minute'], etd['second']),
    start_time = form.data['start_time'],
    end_time = form.data['end_time'],
    student_id = int(form.data['student_id']),
    instructor_id = id
  )


  print('lesson------------------', lesson.to_dict())
  db.session.add(lesson)
  db.session.commit()
  return jsonify(lesson.to_dict())

@lesson_routes.route('/instructor/<int:id>')
def lessons(id):
  lessons = Lesson.query.filter(Lesson.instructor_id == id)
  return jsonify([lesson.to_dict] for lesson in lessons)
