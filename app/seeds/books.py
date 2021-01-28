from app.models import Book, db

def seed_books():

  books_seed = [
      Book(
          id=1,
          title= 'Suzuki Book 1',
          author= "S. Suzuki",
          instructor_id= 1
      )
      ,
      Book(
          id=2,
          title= 'Suzuki Book 2',
          author= "S. Suzuki",
          instructor_id= 1
      )
      ,
      Book(
          id=3,
          title= 'Fiddle Time Joggers Book 1',
          author= "Kathy Blackwell and David Blackwell",
          instructor_id= 1
      )
      ,
      Book(
          id=4,
          title= 'I Can Read Music vol. 1',
          author= "Joanne Martin",
          instructor_id= 1
      )
  ]

  db.session.add_all(books_seed)
  db.session.commit()

def undo_books():
  db.session.execute('TRUNCATE books CASCADE;')
  db.session.commit()
