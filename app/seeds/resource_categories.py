from app.models import ResourceCategory, db


resource_categories = [
  ResourceCategory(category= "Repertoire"),
  ResourceCategory(category= "Previews"),
  ResourceCategory(category= "Excercises"),
  ResourceCategory(category= "Theory"),
]

def seed_resource_categories():
  db.session.add_all(resource_categories)
  db.session.commit()

def undo_resource_categories():
  db.session.execute('TRUNCATE TABLE resource_categories RESTART IDENTITY CASCADE;')
  db.session.commit()
