"""seeding lessons

Revision ID: 9dab0e40418c
Revises: 195cb2da08b9
Create Date: 2020-12-10 17:49:38.460435

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table
import datetime


# revision identifiers, used by Alembic.
revision = '9dab0e40418c'
down_revision = '195cb2da08b9'
branch_labels = None
depends_on = None

date1 = datetime.datetime(2020, 12, 11, 15, 00, 00)
date2 = datetime.datetime(2020, 12, 11, 16, 00, 00)
date3 = datetime.datetime(2020, 12, 11, 17, 00, 00)
date4 = datetime.datetime(2020, 12, 11, 18, 00, 00)

def week_delta(wk):
  return datetime.timedelta(weeks=wk)

def day_delta(d):
  return datetime.timedelta(days=d + 1)

one_hour = datetime.timedelta(hours=1)

def date_iterator(date, student_id):
  result = []

  for x in range(20):
    result.append(
      {
        "start_time": date + week_delta(x),
        "end_time": date + week_delta(x) + one_hour,
        "student_id": student_id,
        "instructor_id": 1
      },
    )
    for y in range(4):
        result.append(
          {
            "start_time": date + week_delta(x) + day_delta(y),
            "end_time": date + week_delta(x) + day_delta(y) + one_hour,
            "student_id": student_id + y + 1,
            "instructor_id": 1
          }
        )
  return result


def upgrade():
  pass
    # lessons = table('lessons',
    #     sa.Column('start_time', sa.DateTime()),
    #     sa.Column('end_time', sa.DateTime()),
    #     sa.Column('student_id', sa.Integer()),
    #     sa.Column('instructor_id', sa.Integer()),
    # )

    # op.bulk_insert(lessons, date_iterator(date1, 2))
    # op.bulk_insert(lessons, date_iterator(date2, 7))
    # op.bulk_insert(lessons, date_iterator(date3, 12))
    # op.bulk_insert(lessons, date_iterator(date4, 17))
def downgrade():
  pass
    # op.drop_table('lessons')
