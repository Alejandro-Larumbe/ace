from flask import Blueprint, jsonify
from flask_login import login_required
from app.forms import UserUpdateForm
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['PUt'])
def user_update(id):
    form = UserUpdateForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    user = User.query.get(id)
    user.first_name = form.data['first_name']
    last_name = form.data['last_name']
    email = form.data['email']
    phone_number = form.data['phone_number']
    address = form.data['address']

    db.session.commit()
    return "User Updated"
    # return "error updating"
