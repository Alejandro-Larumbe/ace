from app.models import ResourceType, db


def seed_resource_types():
  resource_type = [
    ResourceType(type= "Sheet Music"),
    ResourceType(type= "Audio"),
    ResourceType(type= "Video"),
  ]
  db.session.add_all(resource_type)
  db.session.commit()

def undo_resource_types():
  db.session.execute('TRUNCATE TABLE resource_types RESTART IDENTITY CASCADE;')
  db.session.commit()
