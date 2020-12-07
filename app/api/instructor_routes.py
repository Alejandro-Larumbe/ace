from flask import Blueprint, jsonify
from app.models import User, Adult


instructor_routes = Blueprint('instructors', __name__)

@instructor_routes.route('/<int:id>/students')
def students(id):
  students = Adult.query.filter(Adult.instructor_id == id).all()
  # students = [student.to_dict() for student in students]
  result = {}
  return jsonify([student.to_dict() for student in students])
