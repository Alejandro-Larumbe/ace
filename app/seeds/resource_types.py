from app.models import ResourceType, db


def seed_resource_types():
  resource_type = [
    ResourceType(type= "Sheet Music", id=1),
    ResourceType(type= "Audio", id=2),
    ResourceType(type= "Video", id=3),
  ]
  db.session.add_all(resource_type)
  db.session.commit()

def undo_resource_types():
  db.session.execute('TRUNCATE resource_types CASCADE;')
  db.session.commit()
