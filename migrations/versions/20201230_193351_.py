"""empty message

Revision ID: af07d6c19073
Revises: 9dab0e40418c
Create Date: 2020-12-30 19:33:51.415437

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'af07d6c19073'
down_revision = '9dab0e40418c'
branch_labels = None
depends_on = None


def upgrade():
    # pass
    op.add_column('children', sa.Column('dob', sa.Date(), nullable=False))
    op.add_column('children', sa.Column('first_name', sa.String(length=30), nullable=False))
    op.add_column('children', sa.Column('last_name', sa.String(length=30), nullable=False))
    op.drop_constraint('lessons_student_id_fkey', 'lessons', type_='foreignkey')
    op.drop_constraint('lessons_instructor_id_fkey', 'lessons', type_='foreignkey')
    op.create_foreign_key(None, 'lessons', 'instructors', ['instructor_id'], ['id'])
    op.create_foreign_key(None, 'lessons', 'adults', ['student_id'], ['id'])


def downgrade():
    # pass
    op.drop_constraint(None, 'lessons', type_='foreignkey')
    op.drop_constraint(None, 'lessons', type_='foreignkey')
    op.create_foreign_key('lessons_instructor_id_fkey', 'lessons', 'users', ['instructor_id'], ['id'])
    op.create_foreign_key('lessons_student_id_fkey', 'lessons', 'users', ['student_id'], ['id'])
    op.drop_column('children', 'last_name')
    op.drop_column('children', 'first_name')
    op.drop_column('children', 'dob')
