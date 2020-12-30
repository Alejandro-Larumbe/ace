from flask import Blueprint, request, jsonify

from app.models import Piece, Book, db
from app.forms.repertoire import BookForm, PieceForm

repertoire_routes = Blueprint('repertoire_routes', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@repertoire_routes.route('/piece', methods=['POST'])
def upload_piece():
  form = PieceForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    piece = Piece(
      title=form.data['title'],
      composer=form.data["composer"],
      number=form.data["number"],
      book_id=form.data["book_id"],
      instructor_id=form.data["instructor_id"]
    )
    db.session.add(piece)
    db.session.commit()
    return piece.to_dict()

  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@repertoire_routes.route('/<int:id>')
def get_rep_instructor(id):
  pieces = Piece.query.filter(Piece.instructor_id == id).all()
  books = Book.query.filter(Piece.instructor_id == id).all()


  books_by_id = {}
  for book in books:
    books_by_id[book.id] = book.to_dict()

  pieces_by_id = {}
  for piece in pieces:
    pieces_by_id[piece.id] = piece.to_dict()
  return jsonify({  'piecesById': pieces_by_id, "booksById": books_by_id })


@repertoire_routes.route('/piece/<int:id>', methods=['PATCH'])
def update_piece(id):
  form = PieceForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    piece = Piece.query.get(id)
    piece.title=form.data['title']
    piece.composer=form.data["composer"]
    piece.number=form.data["number"]
    piece.book_id=form.data["book_id"]
    piece.instructor_id=form.data["instructor_id"]
    db.session.commit()
    return piece.to_dict()

  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@repertoire_routes.route('/piece/<int:id>', methods=['DELETE'])
def delete_piece(id):
  try:
    piece = Piece.query.get(id)
    print('piece-----------', piece)
    db.session.delete(piece)
    db.session.commit()
    return 'piece deleted'
  except:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@repertoire_routes.route('/book', methods=['POST'])
def upload_book():
  form = BookForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    book = Book(
      title=form.data['title'],
      author=form.data['author'],
      instructor_id=form.data["instructor_id"]
    )
    db.session.add(book)
    db.session.commit()
    return book.to_dict()

  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@repertoire_routes.route('/book/<int:id>', methods=['DELETE'])
def delete_book(id):
  try:
    book = Book.query.get(id)
    print('book-----------', book)
    db.session.delete(book)
    db.session.commit()
    return 'book deleted'
  except:
    return jsonify(error = f"Error deleting `comment with the id of {id}."), 404


@repertoire_routes.route('/book/<int:id>', methods=['PATCH'])
def update_book(id):
  print('request---------', request.json)
  form = BookForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  print('-----------------', form.data)
  if form.validate_on_submit():
    book = Book.query.get(id)
    book.title=form.data['title']
    book.author=form.data["author"]
    book.instructor_id=form.data["instructor_id"]
    db.session.commit()
    return book.to_dict()

  return {'errors': validation_errors_to_error_messages(form.errors)}, 401
