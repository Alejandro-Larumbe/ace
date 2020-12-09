from flask import Blueprint, jsonify
from app.models import User, Adult


student_routes = Blueprint('students', __name__)


@student_routes.route('/<int:id>')
def student(id):
  student = User.query.filter(User.id == id and User.type == 'adults').one()
  return student.to_dict()


@student_routes.route('/all_names/<int:id>')
def student_names(id):
  students = Adult.query.filter(Adult.instructor_id == id).all()
  # students = [student.to_dict() for student in students]
  students = [{'id': student.id, 'full_name': f"{student.first_name} {student.last_name}"} for student in students]
  return jsonify(students)
