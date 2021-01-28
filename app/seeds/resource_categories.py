from app.models import ResourceCategory, db


resource_categories = [
  ResourceCategory(category= "Repertoire", id=1),
  ResourceCategory(category= "Previews", id=2),
  ResourceCategory(category= "Excercises", id=3),
  ResourceCategory(category= "Theory", id=4),
]

def seed_resource_categories():
  db.session.add_all(resource_categories)
  db.session.commit()

def undo_resource_categories():
  db.session.execute('TRUNCATE resource_categories CASCADE;')
  db.session.commit()
