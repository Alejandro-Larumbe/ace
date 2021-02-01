from app.models import ResourceCollection, db


def seed_resource_collections():
  resource_collections = [
    ResourceCollection(collection= "Book 1"),
    ResourceCollection(collection= "Book 2"),
  ]
  db.session.add_all(resource_collections)
  db.session.commit()

def undo_resource_collections():
  db.session.execute('TRUNCATE TABLE resource_collections RESTART IDENTITY CASCADE;')
  db.session.commit()
