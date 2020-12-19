from datetime import datetime
import calendar

cal = calendar.Calendar()


def firstCalendarDay(year, month):
  return cal.monthdatescalendar(year, month)[0][0]

def lastCalendarDay(year, month):
  return cal.monthdatescalendar(year, month)[-1][-1]


def get_month(str):
    date = datetime.strptime(str, "%Y-%m-%d %H:%M:%S")
    return date.month


def date_string(date):
  return date.strftime("%Y-%m-%d")


# def month(mydate):
#   return date.month
