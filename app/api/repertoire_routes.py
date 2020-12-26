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


@repertoire_routes.route('/book', methods=['POST'])
def upload_book():
  form = BookForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  print('----------',form.data)
  if form.validate_on_submit():
    book = Book(
      title=form.data['title'],
      author=form.data['author']
    )
    db.session.add(book)
    db.session.commit()
    return book.to_dict()

  return {'errors': validation_errors_to_error_messages(form.errors)}, 401
