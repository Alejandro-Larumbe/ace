import calendar
cal = calendar.Calendar()

for week in cal.monthdatescalendar(2016, 1):
    for date in week:
        print date
