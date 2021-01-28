from flask.cli import AppGroup
from .users import seed_users, undo_users
from .adults import seed_adults, undo_adults
from .books import seed_books, undo_books
from .pieces import seed_pieces, undo_pieces
from .lessons import seed_lessons, undo_lessons
from .task_types import seed_task_types, undo_task_types
from .resource_categories import seed_resource_categories, undo_resource_categories
from .resource_collections import seed_resource_collections, undo_resource_collections
from .resource_types import seed_resource_types, undo_resource_types
from .resources import seed_resources, undo_resources

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_adults()
    seed_books()
    seed_pieces()
    seed_lessons()
    seed_task_types()
    seed_resource_categories()
    seed_resource_collections()
    seed_resource_types()
    seed_resources()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_books()
    undo_pieces()
    undo_task_types()
    undo_resource_categories()
    undo_resource_collections()
    undo_resource_types()
    undo_resources()
    # Add other undo functions here
