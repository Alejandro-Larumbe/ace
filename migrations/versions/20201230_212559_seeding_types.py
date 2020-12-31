"""seeding_types

Revision ID: 567523006c12
Revises: af07d6c19073
Create Date: 2020-12-30 21:25:59.418129

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table


# revision identifiers, used by Alembic.
revision = '567523006c12'
down_revision = 'af07d6c19073'
branch_labels = None
depends_on = None

task_types_seed= [
    {"type": "Repertoire"},
    {"type": "Etudes"},
    {"type": "Technique"},
    {"type": "Scales"},
    {"type": "Tonalization"},
    {"type": "Ear Rraining"},
    {"type": "Theory"},
    {"type": "Rythm practice"},
    {"type": "Metronome practice"},
]

resource_types_seed= [
    { "type": "Sheet Music" },
    { "type": "Audio" },
    { "type": "Video" },
]


def upgrade():
  task_types = table('task_types',
  sa.Column('type', sa.String()),
  )
  resource_types = table('resource_types',
  sa.Column('type', sa.String()),
  )
  op.bulk_insert(task_types, task_types_seed)
  op.bulk_insert(resource_types, resource_types_seed)


def downgrade():
    pass
