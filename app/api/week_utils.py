import datetime
import calendar
from isoweek import Week



# day = 1
# month = 12
# year = 2020


def week_dates(year, month, day):
  date = datetime.date(year, month, day)
  iso_week = datetime.date(year, month, day).isocalendar()[1]
  w = Week(year, iso_week)
  return w.days()
