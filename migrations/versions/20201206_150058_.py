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

user_seed = [{
        "first_name": 'Amelia',
        "last_name": 'Taylor',
        "profile_pic_url": "https://ace-management.s3.us-east-2.amazonaws.com/HNashPhoto-9273+(1)+copy.jpg",
        "address": faker.address(),
        "email": "demo@instructor.com",
        "hashed_password": 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
        "type": "instructors",
        "studio_logo_url": "https://ace-management.s3.us-east-2.amazonaws.com/Amelia+String+Academy+Logo.jpg",
        "studio_name": "Amelia's String Academy"
    }]



avatars = [
"https://s3.amazonaws.com/uifaces/faces/twitter/oktayelipek/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/pyronite/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/claudioguglieri/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/wegotvices/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/wiljanslofstra/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/shalt0ni/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/tjisousa/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/ah_lice/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/hermanobrother/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/sandywoodruff/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/dawidwu/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/tom_even/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/greenbes/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/oktayelipek/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/hoangloi/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/scottgallant/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/plasticine/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/laasli/128.jpg",
"https://s3.amazonaws.com/uifaces/faces/twitter/ma_tiax/128.jpg"
]

for i in range(20):
    user_seed.append({
        "first_name": faker.first_name(),
        "last_name": faker.last_name(),
        "profile_pic_url": avatars[i],
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
        sa.Column('address', sa.String()),
        sa.Column('email', sa.String()),
        sa.Column('hashed_password', sa.String()),
        sa.Column('type', sa.String()),
    )

    op.bulk_insert(users, user_seed)


def downgrade():
    pass
