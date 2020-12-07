"""all tables

Revision ID: 110a305780a1
Revises: ffdc0a98111c
Create Date: 2020-12-03 22:47:21.335858

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '110a305780a1'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('adults',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('dob', sa.Date(), nullable=True),
    sa.Column('is_student', sa.Boolean(), nullable=True),
    sa.Column('is_parent', sa.Boolean(), nullable=True),
    sa.Column('instructor_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.ForeignKeyConstraint(['instructor_id'], ['instructors.id'], ),
    sa.ForeignKeyConstraint(['id'], ['users.id'], ),
    )

def downgrade():
    pass
    op.drop_table('adults')
