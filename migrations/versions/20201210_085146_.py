"""empty message

Revision ID: 195cb2da08b9
Revises: c0d6eef1ee92
Create Date: 2020-12-10 08:51:46.007276

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table


# revision identifiers, used by Alembic.
revision = '195cb2da08b9'
down_revision = 'c0d6eef1ee92'
branch_labels = None
depends_on = None

books_seed = [
    {
        "title": 'Suzuki Book 1',
        "author": "S. Suzuki",
        "instructor_id": 1
    },
    {
        "title": 'Suzuki Book 2',
        "author": "S. Suzuki",
        "instructor_id": 1
    },
    {
        "title": 'Fiddle Time Joggers Book 1',
        "author": "Kathy Blackwell and David Blackwell",
        "instructor_id": 1
    },
    {
        "title": 'I Can Read Music vol. 1',
        "author": "Joanne Martin",
        "instructor_id": 1
    },
]

pieces_seed = [

    {
        "title": "Bow down, O Belinda",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Under arrest!",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Jim along Josie",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Down up",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Two in a boat",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "London Bridge (I can play my open D)",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Fast lane",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "In flight",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Lift off",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Katie's waltz",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Copy cat",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Tap dancer",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Rhythm fever",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Here it comes!",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "So there!",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Rowing boat",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Ally bally",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },
    {
        "title": "Tiptoe, boo!",
        "book_id": 3,
        "instructor_id": 1,
        "number": None,
        "composer": None
    },

    {
        "instructor_id": 1,
        "number": 1,
        "title": "Twinkle, Twinkle, Little Star Variations",
        "composer": "Suzuki",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 2,
        "title": "Lightly Row",
        "composer": "Folk Song",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 3,
        "title": "Song of the Wind",
        "composer": "Folk Song",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 4,
        "title": "Go Tell Aunt Rhody",
        "composer": "Folk Song",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 5,
        "title": "O Come, Little Children",
        "composer": "Folk Song",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 6,
        "title": "May Song",
        "composer": "Folk Song",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 7,
        "title": "Long, Long Ago",
        "composer": "Bayly",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 8,
        "title": "Allegro",
        "composer": "Suzuki",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 9,
        "title": "Perpetual Motion",
        "composer": "Suzuki",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 10,
        "title": "Allegretto",
        "composer": "Suzuki",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 11,
        "title": "Andantino",
        "composer": "Suzuki",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 12,
        "title": "Etude",
        "composer": "Suzuki",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 13,
        "title": "Minuet",
        "composer": "Bach",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 14,
        "title": "Minuet",
        "composer": "Bach",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 15,
        "title": "Minuet",
        "composer": "Bach",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 16,
        "title": "The Happy Farmer",
        "composer": "Schumann",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 17,
        "title": "Gavotte",
        "composer": "Gossec",
        "book_id": 1
    },
    {
        "instructor_id": 1,
        "number": 1,
        "title": "Chorus from Judas Maccabaeus",
        'composer': "Händel",
        "book_id": 2
    },
    {
        "instructor_id": 1,
        "number": 2,
        "title": "Musette",
        'composer': "Bach",
        "book_id": 2
    },
    {
        "instructor_id": 1,
        "number": 3,
        "title": "Hunter's Chorus from Der Freischütz",
        'composer': "Weber",
        "book_id": 2
    },
    {
        "instructor_id": 1,
        "number": 4,
        "title": "Waltz",
        'composer': "Brahms",
        "book_id": 2
    },
    {
        "instructor_id": 1,
        "number": 5,
        "title": "Bourrée",
        'composer': "Händel",
        "book_id": 2
    },
    {
        "instructor_id": 1,
        "number": 6,
        "title": "The Two Grenadiers",
        'composer': "Schumann",
        "book_id": 2
    },
    {
        "instructor_id": 1,
        "number": 7,
        "title": "Theme from Witches Dance",
        'composer': "Paganini",
        "book_id": 2
    },
    {
        "instructor_id": 1,
        "number": 8,
        "title": "Gavotte from Mignon",
        'composer': "Thomas",
        "book_id": 2
    },
    {
        "instructor_id": 1,
        "number": 9,
        "title": "Gavotte",
        'composer': "Lully",
        "book_id": 2
    },
    {
        "instructor_id": 1,
        "number": 10,
        "title": "Minuet in G",
        'composer': "Beethoven",
        "book_id": 2
    },
    {
        "instructor_id": 1,
        "number": 11,
        "title": "Minuet",
        'composer': "Boccherini",
        "book_id": 2
    },

]

for i in range(50):
    pieces_seed.append({
        "instructor_id": 1,
        "title": f"Lesson {i}",
        "book_id": 4,
        "number": None,
        "composer": None
    })


pieces_append = [
    {
        "title": 'Sonata No. 1 in G minor, BWV 1001',
        "composer": "Johann Sebastian Bach",
        "instructor_id": 1,
        "book_id": None,
        "number": None
    },
    {
        "title": 'Partita No. 1 in B minor, BWV 1002',
        "composer": "Johann Sebastian Bach",
        "instructor_id": 1,
        "book_id": None,
        "number": None
    },
    {
        "title": 'Sonata No. 2 in A minor, BWV 1003',
        "composer": "Johann Sebastian Bach",
        "instructor_id": 1,
        "book_id": None,
        "number": None
    },
    {
        "title": 'Partita No. 2 in D minor, BWV 1004',
        "composer": "Johann Sebastian Bach",
        "instructor_id": 1,
        "book_id": None,
        "number": None
    },
    {
        "title": 'Sonata No. 3 in C major, BWV 1005',
        "composer": "Johann Sebastian Bach",
        "instructor_id": 1,
        "book_id": None,
        "number": None
    },
    {
        "title": 'Partita No. 3 in E major, BWV 1006',
        "composer": "Johann Sebastian Bach",
        "instructor_id": 1,
        "book_id": None,
        "number": None
    },
    {
        "composer": "Charles Auguste de Bériot",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": '10 Studi o Capricci, Op. 9 -ded. Baillot-',
    },
    {
        "composer": "Charles Auguste de Bériot",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": '6 Etudes brillantes pour le violon , Op. 17',
    },
    {
        "composer": "Charles Auguste de Bériot",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": '3 Caprices for Violin, Op. 36',
    },
    {
        "composer": "Charles Auguste de Bériot",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": '3 Etudes caracteristiques, Op. 37 ',
    },
    {
        "composer": "Charles Auguste de Bériot",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": '9 Studies, for violin solo',
    },
    {
        "composer": "Charles Auguste de Bériot",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": '12 Scènes ou Caprices, Op. 109 ',
    },
    {
        "composer": "Charles Auguste de Bériot",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": '60 Etudes de Concert, Op. 123',
    },
    {
        "composer": "Charles Auguste de Bériot",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": 'Prélude ou Improvisation, for violin solo, Op. post.',
    },
    {
        "composer": "Niccolò Paganini",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": '24 Caprices for solo violin, in the form of études  ',
    },
    {
        "composer": "Niccolò Paganini",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": '"Duo merveille", Sonata for solo violin, in C major ',
    },
    {
        "composer": "Niccolò Paganini",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": 'Introduction and variations on "Nel cor più non mi sento" ',
    },
    {
        "composer": "Niccolò Paganini",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": '"Capriccio" (a.k.a. Preludio) in G major',
    },
    {
        "composer": "Niccolò Paganini",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": "God Save The King Variations on the English national anthem, Op.9",
    },
    {
        "composer": "Niccolò Paganini",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": '60 Variations on the Genoese folksong "Barucabà" Op.14',
    },

    {
        "composer": "Niccolò Paganini",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": '"Valtz" for violin solo',
    },

    {
        "composer": "Niccolò Paganini",
        "instructor_id": 1,
        "book_id": None,
        "number": None,
        "title": 'Inno patriottico, Allegro and 6 Variations',
    },

    {
        "composer": "Niccolò Paganini",
        "book_id": None,
        "number": None,
        "instructor_id": 1,
        "title": '"Tema variato", Theme and 7 Variations ',
    },

    {
        "composer": "Niccolò Paganini",
        "book_id": None,
        "number": None,
        "instructor_id": 1,
        "title": '"Sonata" for solo violin in A major',
    },
]

for i in range(len(pieces_append)):
    pieces_seed.append(
        pieces_append[i]
    )


def upgrade():
    books = table('books',
                  sa.Column('title', sa.String()),
                  sa.Column('author', sa.String()),
                  sa.Column('instructor_id', sa.Integer())
                  )

    op.bulk_insert(books, books_seed)

    pieces = table('pieces',
                   sa.Column('title', sa.String()),
                   sa.Column('composer', sa.String()),
                   sa.Column('instructor_id', sa.Integer()),
                   sa.Column('book_id', sa.Integer()),
                   sa.Column('number', sa.Integer()),
                   )
    print(pieces)
    op.bulk_insert(pieces, pieces_seed)


def downgrade():
    pass
    # ### commands auto generated by Alembic - please adjust! ###
    # ### end Alembic commands ###
