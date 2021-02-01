from werkzeug.security import generate_password_hash
from app.models import db, Adult, Instructor, User
from faker import Faker
faker = Faker()

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo_instructor = Instructor(
            first_name='Amelia',
            last_name='Taylor',
            profile_pic_url="https://ace-management.s3.us-east-2.amazonaws.com/HNashPhoto-9273+(1)+copy.jpg",
            address=faker.address(),
            phone_number=faker.phone_number(),
            email="demo@instructor.com",
            hashed_password='pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            type="instructors",
            studio_name= "Amelia's String Academy",
            studio_logo_url= 'https://ace-management.s3.us-east-2.amazonaws.com/Amelia+String+Academy+Logo+2.jpg'
    )

    db.session.add(demo_instructor)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE TABLE adults RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE TABLE instructors RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE TABLE users RESTART IDENTITY CASCADE;')
    db.session.commit()
