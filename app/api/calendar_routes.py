from flask import Blueprint, jsonify, request
from sqlalchemy import extract, Date, cast
from app.models import Lesson, db
from datetime import datetime
from .utils import firstCalendarDay, lastCalendarDay, date_string, calendar_month
from .week_utils import week_dates
import operator

calendar_routes = Blueprint('calendar_routes', __name__)



@calendar_routes.route('/<int:id>/month/<int:year>/<int:month>')
def get_month(id, year, month):
  month += 1
  calendarMonth = calendar_month(year, month)
  print('-------------------')
  firstDay = firstCalendarDay(year, month)
  lastDay = lastCalendarDay(year, month)
  lessons = Lesson.query.filter(cast(Lesson.start_time, Date) <= lastDay, cast(Lesson.start_time, Date) >= firstDay, id == Lesson.instructor_id).all()
  byId = {}
  byDay = {}

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

  return jsonify({"byId": byId, 'byDay': byDay, 'calendarMonth': calendarMonth})
  # return 'hi'

@calendar_routes.route('/<int:id>/week/<int:year>/<int:month>/<int:day>')
def get_week(id, year, month, day):
  month += 1
  iso_week = week_dates(year, month, day)
  first_day = iso_week[0]
  last_day = iso_week[-1]

  print('-------------------', iso_week)
  print('-------------------', first_day)
  print('-------------------', last_day)

  lessons = Lesson.query.filter(cast(Lesson.start_time, Date) <= last_day, cast(Lesson.start_time, Date) >= first_day, id == Lesson.instructor_id).all()
  by_id = {}
  by_day = {}

  for lesson in lessons:
    by_id[lesson.id] = lesson.to_dict_camel()
    dateKey = date_string(lesson.start_time)
    if dateKey not in by_day:
      by_day[dateKey] = []
    by_day[dateKey].append(lesson.id)

  calendar_week = [date_string(day) for day in iso_week]


  return jsonify({"byId": by_id, 'byDay': by_day, 'calendarWeek': calendar_week})


    # week_no = lesson.start_time.isocalendar()[1]
    # print(week_no)
    # if week_no not in weeks:
    #   weeks[week_no] = []
    # weeks[week_no].append(lesson.id)
    # if dateKey not in byDay:
    #   byDay[dateKey] = []

    # byDay[dateKey].append(lesson.id)

  # return jsonify({"byId": byId, 'byDay': byDay, 'calendarMonth': calendarMonth})
