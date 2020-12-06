from flask import Blueprint, jsonify
from app.models import User


student_routes = Blueprint('students', __name__)


@student_routes.route('/<int:id>')
def student(id):
  student = User.query.filter(User.id == id and User.type == 'adults').one()
  return student.to_dict()
