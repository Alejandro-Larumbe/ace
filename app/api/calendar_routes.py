from flask import Blueprint, jsonify, request
from sqlalchemy import extract, Date, cast
from app.models import Lesson, db
from datetime import datetime
from .utils import firstCalendarDay, lastCalendarDay, date_string
import operator

calendar_routes = Blueprint('calendar_routes', __name__)



@calendar_routes.route('/<int:id>/month/<int:year>/<int:month>')
def get_month(id, year, month):
  month += 1
  print('-------------------')
  firstDay = firstCalendarDay(year, month)
  lastDay = lastCalendarDay(year, month)
  lessons = Lesson.query.filter(cast(Lesson.start_time, Date) <= lastDay, cast(Lesson.start_time, Date) >= firstDay, id == Lesson.instructor_id).all()
  byId = {}
  byDay = {}
  for lesson in lessons:
    print('--------------------', lesson.to_dict())

  for lesson in lessons:
    # print('--------------------', lesson.to_dict())
    byId[lesson.id] = lesson.to_dict_camel()
    # week_no = lesson.start_time.isocalendar()[1]
    dateKey = date_string(lesson.start_time)
    # print(week_no)
    # if week_no not in weeks:
    #   weeks[week_no] = []
    # weeks[week_no].append(lesson.id)
    if dateKey not in byDay:
      byDay[dateKey] = []

    byDay[dateKey].append(lesson.id)

  return jsonify({"byId": byId, 'byDay': byDay})
  return 'hi'
