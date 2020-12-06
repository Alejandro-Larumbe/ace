from flask import Blueprint, jsonify
from app.models import User


student_routes = Blueprint('students', __name__)

# @student_routes.route('/')
# def students();
#   students = User.query.filter()
