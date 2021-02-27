import datetime
import calendar
from isoweek import Week


def week_dates(year, month, day):
  date = datetime.date(year, month, day)
  iso_week = datetime.date(year, month, day).isocalendar()[1]
  w = Week(year, iso_week)
  return w.days()
