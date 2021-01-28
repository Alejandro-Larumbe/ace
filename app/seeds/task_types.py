from app.models import TaskType, db


def seed_task_types():
  task_types = [
    TaskType(type= "Repertoire", id=1),
    TaskType(type= "Etudes", id=2),
    TaskType(type= "Technique", id=3),
    TaskType(type= "Scales", id=4),
    TaskType(type= "Tonalization", id=5),
    TaskType(type= "Ear Training", id=6),
    TaskType(type= "Theory", id=7),
    TaskType(type= "Rythm Practice", id=8),
    TaskType(type= "Metronome Practice", id=9),
  ]
  db.session.add_all(task_types)
  db.session.commit()

def undo_task_types():
  db.session.execute('TRUNCATE task_types CASCADE;')
  db.session.commit()
