"""empty message

Revision ID: 8f820ab7f0d8
Revises: 93de23161718
Create Date: 2020-12-06 15:00:58.654209

"""

from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table
from faker import Faker
faker = Faker()



# revision identifiers, used by Alembic.
revision = '93de23161718'
down_revision = '59ef70ca9aa0'
branch_labels = None
depends_on = None

user_seed = [
    {
        "first_name": 'Amelia',
        "last_name": 'Taylor',
        "profile_pic_url": "https://ace-management.s3.us-east-2.amazonaws.com/HNashPhoto-9273+(1)+copy.jpg",
        "address": faker.address(),
        "phone_number": faker.phone_number(),
        "email": "demo@instructor.com",
        "hashed_password": 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
        "type": "instructors",
    },
    {
        "first_name": 'John',
        "last_name": 'Perez',
        "profile_pic_url": "https://img1.kpopmap.com/2016/10/jung-hyunjun-kpop-sm-kids-model-contest-winners-1st-generation-2016-profile-members-trainee.jpg",
        "address": faker.address(),
        "phone_number": faker.phone_number(),
        "email": "demo@student.com",
        "hashed_password": 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
        "type": "adults",
    },
    ]



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

for i in range(19):
    user_seed.append({
        "first_name": faker.first_name(),
        "last_name": faker.last_name(),
        "profile_pic_url": avatars[i],
        "phone_number": faker.phone_number(),
        "address": faker.address(),
        "email": faker.safe_email(),
        "hashed_password": 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
        "type": "adults",
    })


def upgrade():
    users = table('users',
        sa.Column('first_name', sa.String()),
        sa.Column('last_name', sa.String()),
        sa.Column('profile_pic_url', sa.String()),
        sa.Column('phone_number', sa.String()),
        sa.Column('address', sa.String()),
        sa.Column('email', sa.String()),
        sa.Column('hashed_password', sa.String()),
        sa.Column('type', sa.String()),
    )

    op.bulk_insert(users, user_seed)


def downgrade():
    pass
