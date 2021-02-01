from app.models import Piece, db


def seed_pieces():

  pieces_seed = [
    Piece(
        title= 'Sonata No. 1 in G minor, BWV 1001',
        composer= "Johann Sebastian Bach",
        instructor_id= 1,
        book_id= None,
        number= None
    ),
    Piece(
        title= 'Partita No. 1 in B minor, BWV 1002',
        composer= "Johann Sebastian Bach",
        instructor_id= 1,
        book_id= None,
        number= None
    ),
    Piece(
        title= 'Sonata No. 2 in A minor, BWV 1003',
        composer= "Johann Sebastian Bach",
        instructor_id= 1,
        book_id= None,
        number= None
    ),
    Piece(
        title= 'Partita No. 2 in D minor, BWV 1004',
        composer= "Johann Sebastian Bach",
        instructor_id= 1,
        book_id= None,
        number= None
    ),
    Piece(
        title= 'Sonata No. 3 in C major, BWV 1005',
        composer= "Johann Sebastian Bach",
        instructor_id= 1,
        book_id= None,
        number= None
    ),
    Piece(
        title= 'Partita No. 3 in E major, BWV 1006',
        composer= "Johann Sebastian Bach",
        instructor_id= 1,
        book_id= None,
        number= None
    ),
    Piece(
        composer= "Charles Auguste de Bériot",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= '10 Studi o Capricci, Op. 9 -ded. Baillot-',
    ),
    Piece(
        composer= "Charles Auguste de Bériot",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= '6 Etudes brillantes pour le violon , Op. 17',
    ),
    Piece(
        composer= "Charles Auguste de Bériot",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= '3 Caprices for Violin, Op. 36',
    ),
    Piece(
        composer= "Charles Auguste de Bériot",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= '3 Etudes caracteristiques, Op. 37 ',
    ),
    Piece(
        composer= "Charles Auguste de Bériot",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= '9 Studies, for violin solo',
    ),
    Piece(
        composer= "Charles Auguste de Bériot",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= '12 Scènes ou Caprices, Op. 109 ',
    ),
    Piece(
        composer= "Charles Auguste de Bériot",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= '60 Etudes de Concert, Op. 123',
    ),
    Piece(
        composer= "Charles Auguste de Bériot",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= 'Prélude ou Improvisation, for violin solo, Op. post.',
    ),
    Piece(
        composer= "Niccolò Paganini",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= '24 Caprices for solo violin, in the form of études  ',
    ),
    Piece(
        composer= "Niccolò Paganini",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= '"Duo merveille", Sonata for solo violin, in C major ',
    ),
    Piece(
        composer= "Niccolò Paganini",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= 'Introduction and variations on "Nel cor più non mi sento" ',
    ),
    Piece(
        composer= "Niccolò Paganini",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= '"Capriccio" (a.k.a. Preludio) in G major',
    ),
    Piece(
        composer= "Niccolò Paganini",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= "God Save The King Variations on the English national anthem, Op.9",
    ),
    Piece(
        composer= "Niccolò Paganini",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= '60 Variations on the Genoese folksong "Barucabà" Op.14',
    ),

    Piece(
        composer= "Niccolò Paganini",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= '"Valtz" for violin solo',
    ),

    Piece(
        composer= "Niccolò Paganini",
        instructor_id= 1,
        book_id= None,
        number= None,
        title= 'Inno patriottico, Allegro and 6 Variations',
    ),

    Piece(
        composer= "Niccolò Paganini",
        book_id=None,
        number= None,
        instructor_id= 1,
        title= '"Tema variato", Theme and 7 Variations ',
    ),

    Piece(
        composer= "Niccolò Paganini",
        book_id=None,
        number= None,
        instructor_id= 1,
        title= '"Sonata" for solo violin in A major',
    ),
    Piece(
      title= "Bow down, O Belinda",
      book_id= 3,
      instructor_id= 1,
      number= None,
      composer= None
    ),
    Piece(
        title= "Under arrest!",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Jim along Josie",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Down up",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Two in a boat",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "London Bridge (I can play my open D)",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Fast lane",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "In flight",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Lift off",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Katie's waltz",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Copy cat",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Tap dancer",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Rhythm fever",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Here it comes!",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "So there!",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Rowing boat",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Ally bally",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),
    Piece(
        title= "Tiptoe, boo!",
        book_id= 3,
        instructor_id= 1,
        number= None,
        composer= None
    ),

    Piece(
        instructor_id= 1,
        number= 1,
        title= "Twinkle, Twinkle, Little Star Variations",
        composer= "Suzuki",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 2,
        title= "Lightly Row",
        composer= "Folk Song",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 3,
        title= "Song of the Wind",
        composer= "Folk Song",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 4,
        title= "Go Tell Aunt Rhody",
        composer= "Folk Song",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 5,
        title= "O Come, Little Children",
        composer= "Folk Song",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 6,
        title= "May Song",
        composer= "Folk Song",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 7,
        title= "Long, Long Ago",
        composer= "Bayly",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 8,
        title= "Allegro",
        composer= "Suzuki",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 9,
        title= "Perpetual Motion",
        composer= "Suzuki",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 10,
        title= "Allegretto",
        composer= "Suzuki",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 11,
        title= "Andantino",
        composer= "Suzuki",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 12,
        title= "Etude",
        composer= "Suzuki",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 13,
        title= "Minuet",
        composer= "Bach",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 14,
        title= "Minuet",
        composer= "Bach",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 15,
        title= "Minuet",
        composer= "Bach",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 16,
        title= "The Happy Farmer",
        composer= "Schumann",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 17,
        title= "Gavotte",
        composer= "Gossec",
        book_id= 1
    ),
    Piece(
        instructor_id= 1,
        number= 1,
        title= "Chorus from Judas Maccabaeus",
        composer= "Händel",
        book_id= 2
    ),
    Piece(
        instructor_id= 1,
        number= 2,
        title= "Musette",
        composer= "Bach",
        book_id= 2
    ),
    Piece(
        instructor_id= 1,
        number= 3,
        title= "Hunter's Chorus from Der Freischütz",
        composer= "Weber",
        book_id= 2
    ),
    Piece(
        instructor_id= 1,
        number= 4,
        title= "Waltz",
        composer= "Brahms",
        book_id= 2
    ),
    Piece(
        instructor_id= 1,
        number= 5,
        title= "Bourrée",
        composer= "Händel",
        book_id= 2
    ),
    Piece(
        instructor_id= 1,
        number= 6,
        title= "The Two Grenadiers",
        composer= "Schumann",
        book_id= 2
    ),
    Piece(
        instructor_id= 1,
        number= 7,
        title= "Theme from Witches Dance",
        composer= "Paganini",
        book_id= 2
    ),
    Piece(
        instructor_id= 1,
        number= 8,
        title= "Gavotte from Mignon",
        composer= "Thomas",
        book_id= 2
    ),
    Piece(
        instructor_id= 1,
        number= 9,
        title= "Gavotte",
        composer= "Lully",
        book_id= 2
    ),
    Piece(
        instructor_id= 1,
        number= 10,
        title= "Minuet in G",
        composer= "Beethoven",
        book_id= 2
    ),
    Piece(
        instructor_id= 1,
        number= 11,
        title= "Minuet",
        composer= "Boccherini",
        book_id= 2
    ),
  ]
  for i in range(50):
    pieces_seed.append(
      Piece(
        instructor_id= 1,
        title= f"Lesson {i}",
        book_id= 4,
        number= None,
        composer= None
      )
    )

  db.session.add_all(pieces_seed)
  db.session.commit()

def undo_pieces():
  db.session.execute('TRUNCATE TABLE pieces RESTART IDENTITY CASCADE;')
  db.session.commit()
