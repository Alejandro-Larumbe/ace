"""empty message

Revision ID: 93de23161718
Revises: 59ef70ca9aa0
Create Date: 2020-12-06 12:04:45.653118

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table


# revision identifiers, used by Alembic.
revision = '8f820ab7f0d8'
down_revision = '93de23161718'
branch_labels = None
depends_on = None

adults_seed = [{
    'id': 2,
    'is_student': True,
    'is_parent': False,
    'instructor_id': 1
}]

for i in range(3,22):
    adults_seed.append({
        'id': i,
        'is_student': True,
        'is_parent': False,
        'instructor_id': 1
    })


def upgrade():
    # pass
    instructors = table('instructors',
        sa.Column('id', sa.Integer()),
        sa.Column('studio_name', sa.String()),
        sa.Column('studio_logo_url', sa.String()),
    )

    op.bulk_insert(instructors, [{
        'id': 1,
        'studio_name': "Amelia's Strings Academy",
        'studio_logo_url': 'https://ace-management.s3.us-east-2.amazonaws.com/Amelia+String+Academy+Logo.jpg'
    }])

    adults = table('adults',
        sa.Column('id', sa.Integer()),
        sa.Column('is_student', sa.Boolean()),
        sa.Column('is_parent', sa.Boolean()),
        sa.Column('instructor_id', sa.Integer()),
    )

    op.bulk_insert(adults, adults_seed)




def downgrade():
    pass
