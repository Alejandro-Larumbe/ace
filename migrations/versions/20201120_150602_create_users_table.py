"""create_users_table

Revision ID: ffdc0a98111c
Revises:
Create Date: 2020-11-20 15:06:02.230689

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ffdc0a98111c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():

    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=40), nullable =False),
    sa.Column('last_name', sa.String(length=40), nullable =False),
    sa.Column('profile_pic_url', sa.String(length=1000), nullable =True),
    sa.Column('phone_number', sa.String(length=30), nullable =True),
    sa.Column('address', sa.String(length=500), nullable =True),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('type', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    )

    op.create_table('instructors',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('studio_name', sa.String(length=50), nullable=True),
    sa.Column('studio_logo_url', sa.String(length=1000), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.ForeignKeyConstraint(['id'], ['users.id'], ),
    )


def downgrade():
    op.drop_table('instructors')
    op.drop_table('users')
