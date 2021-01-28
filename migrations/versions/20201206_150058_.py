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



def upgrade():
    pass


def downgrade():
    pass
