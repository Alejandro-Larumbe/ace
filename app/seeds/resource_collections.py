from app.models import ResourceCollection, db


def seed_resource_collections():
  resource_collections = [
    ResourceCollection(collection= "Book 1", id=1),
    ResourceCollection(collection= "Book 2", id=2),
  ]
  db.session.add_all(resource_collections)
  db.session.commit()

def undo_resource_collections():
  db.session.execute('TRUNCATE resource_collections CASCADE;')
  db.session.commit()
