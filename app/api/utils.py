from datetime import datetime


mydate = '2020-02-11 11:00:07'

def get_month(str):
  date = datetime.strptime(str, "%Y-%m-%d %H:%M:%S")
  return date.month

def get_year(str):
  date = datetime.strptime(str, "%Y-%m-%d %H:%M:%S")
  return date.year



# def month(mydate):
#   return date.month
