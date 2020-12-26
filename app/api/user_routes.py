from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import UserUpdateForm
from app.models import User, db, Adult
from app.forms import UserRegister
user_routes = Blueprint('users', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages




@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('', methods=['POST'])
def register_student():
    form = UserRegister()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = Adult(
            first_name=form.data['first_name'],
            last_name=form.data['last_name'],
            email=form.data['email'],
            hashed_password='pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            type=form.data['type'],
            instructor_id=form.data['instructor_id']
        )
        print('-------------', user)
        db.session.add(user)
        db.session.commit()
        return user.to_dict_camel()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['PUT'])
def user_update(id):
    form = UserUpdateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User.query.get(id)
        user.first_name = form.data['first_name']
        user.last_name = form.data['last_name']
        user.email = form.data['email']
        user.phone_number = form.data['phone_number']
        user.address = form.data['address']
        if form.data['type'] == 'instructors':
            user.studio_name = form.data['studio_name']
        if form.data['type'] == 'adults':
            user.dob = form.data['dob']

        db.session.commit()
        return jsonify(user.to_dict_camel())
    return "error updating"


@user_routes.route('/<int:id>', methods=['DELETE'])
def user_delete(id):
    # try:
        user= Adult.query.get(id)
        db.session.delete(user)
        db.session.commit()
        return 'user deleted'
    # except:
        # return {'errors': 'error'}, 401
