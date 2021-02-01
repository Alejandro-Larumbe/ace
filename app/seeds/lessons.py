from app.models import Lesson, db
import datetime


seed_lesson = []

date1 = datetime.datetime(2021, 1, 11, 15, 00, 00)
date2 = datetime.datetime(2021, 1, 11, 16, 00, 00)
date3 = datetime.datetime(2021, 1, 11, 17, 00, 00)
date4 = datetime.datetime(2021, 1, 11, 18, 00, 00)

def week_delta(wk):
  return datetime.timedelta(weeks=wk)

def day_delta(d):
  return datetime.timedelta(days=d + 1)

one_hour = datetime.timedelta(hours=1)



def date_iterator(date, student_id):

  for x in range(20):
    seed_lesson.append(
      Lesson(
        start_time= date + week_delta(x),
        end_time= date + week_delta(x) + one_hour,
        student_id= student_id,
        instructor_id= 1
      ),
    )
    for y in range(4):
        seed_lesson.append(
          Lesson(
            start_time= date + week_delta(x) + day_delta(y),
            end_time= date + week_delta(x) + day_delta(y) + one_hour,
            student_id= student_id + y + 1,
            instructor_id= 1
          )
        )

date_iterator(date1, 2)
date_iterator(date2, 7)
date_iterator(date3, 12)
date_iterator(date4, 17)

def seed_lessons():
  db.session.add_all(seed_lesson)
  db.session.commit()

def undo_lessons():
  db.session.execute('TRUNCATE TABLE lessons RESTART IDENTITY CASCADE;')
  db.session.commit()
