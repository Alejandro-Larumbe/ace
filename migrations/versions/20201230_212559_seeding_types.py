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
    {"type": "Ear Training"},
    {"type": "Theory"},
    {"type": "Rythm Practice"},
    {"type": "Metronome Practice"},
]

resource_categories_seed=[
    {"category": "repertoire"},
    {"category": "previous"},
    {"category": "exercises"},
    {"category": "theory"},
]

resource_collections_seed=[
    {"collection": "book 1"},
    {"collection": "book 2"},
]

resource_types_seed= [
    { "type": "Sheet Music" },
    { "type": "Audio" },
    { "type": "Video" },
]


def upgrade():
    pass
#   task_types = table('task_types',
#   sa.Column('type', sa.String()),
#   )
#   resource_collections = table('resource_collections',
#   sa.Column('collection', sa.String()),
#   )
#   resource_categories = table('resource_categories',
#   sa.Column('category', sa.String()),
#   )
#   resource_types = table('resource_types',
#   sa.Column('type', sa.String()),
#   )
#   op.bulk_insert(task_types, task_types_seed)
#   op.bulk_insert(resource_types, resource_types_seed)
#   op.bulk_insert(resource_categories, resource_categories_seed)
#   op.bulk_insert(resource_collections, resource_collections_seed)


def downgrade():
    pass
