from werkzeug.security import generate_password_hash
from app.models import db, Adult, Instructor
from faker import Faker
faker = Faker()

avatars = [
    "https://randomuser.me/api/portraits/med/men/75.jpg",
    "https://randomuser.me/api/portraits/med/women/75.jpg",
    "https://randomuser.me/api/portraits/med/men/1.jpg",
    "https://randomuser.me/api/portraits/med/women/1.jpg",
    "https://randomuser.me/api/portraits/med/men/3.jpg",
    "https://randomuser.me/api/portraits/med/women/3.jpg",
    "https://randomuser.me/api/portraits/med/men/4.jpg",
    "https://randomuser.me/api/portraits/med/women/5.jpg",
    "https://randomuser.me/api/portraits/med/men/6.jpg",
    "https://randomuser.me/api/portraits/med/women/6.jpg",
    "https://randomuser.me/api/portraits/med/men/7.jpg",
    "https://randomuser.me/api/portraits/med/women/7.jpg",
    "https://randomuser.me/api/portraits/med/men/8.jpg",
    "https://randomuser.me/api/portraits/med/women/8.jpg",
    "https://randomuser.me/api/portraits/med/men/9.jpg",
    "https://randomuser.me/api/portraits/med/women/9.jpg",
    "https://randomuser.me/api/portraits/med/men/10.jpg",
    "https://randomuser.me/api/portraits/med/women/10.jpg",
    "https://randomuser.me/api/portraits/med/men/11.jpg",
    "https://randomuser.me/api/portraits/med/women/11.jpg",
]
# Adds a demo user, you can add other users here if you want
def seed_adults():
  adults = []
  adults.append(Adult(
    first_name= 'John',
    last_name= 'Perez',
    profile_pic_url= "https://img1.kpopmap.com/2016/10/jung-hyunjun-kpop-sm-kids-model-contest-winners-1st-generation-2016-profile-members-trainee.jpg",
    address= faker.address(),
    phone_number= faker.phone_number(),
    email= "demo@student.com",
    hashed_password= 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
    type= "adults",
    instructor_id= 1,
    dob= faker.date_of_birth(minimum_age=4, maximum_age=15),
    is_student= True,
    is_parent= False,
    id=2
  ))


  for i in range(19):
    adults.append(
        Adult(
            id=i+3,
            first_name=faker.first_name(),
            last_name=faker.last_name(),
            profile_pic_url=avatars[i],
            phone_number=faker.phone_number(),
            address=faker.address(),
            email=faker.safe_email(),
            hashed_password='pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            type="adults",
            instructor_id=1,
            dob= faker.date_of_birth(minimum_age=4, maximum_age=15),
            is_student= True,
            is_parent= False,
        )
    )

  db.session.add_all(adults)
  db.session.commit()


def undo_adults():
  pass
