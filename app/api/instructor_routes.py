from flask import Blueprint, jsonify
from app.models import User, Adult


instructor_routes = Blueprint('instructors', __name__)

@instructor_routes.route('/<int:id>/students')
def students(id):
  students = User.query.filter(User.type == "adults" and instructor_id == id).all()
  return {"students": [student.to_dict() for student in students]}
