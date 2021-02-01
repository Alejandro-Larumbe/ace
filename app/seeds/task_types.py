from app.models import TaskType, db


def seed_task_types():
  task_types = [
    TaskType(type= "Repertoire"),
    TaskType(type= "Etudes"),
    TaskType(type= "Technique"),
    TaskType(type= "Scales"),
    TaskType(type= "Tonalization"),
    TaskType(type= "Ear Training"),
    TaskType(type= "Theory"),
    TaskType(type= "Rythm Practice"),
    TaskType(type= "Metronome Practice"),
  ]
  db.session.add_all(task_types)
  db.session.commit()

def undo_task_types():
  db.session.execute('TRUNCATE TABLE task_types RESTART IDENTITY CASCADE')
  db.session.commit()
