from flask import Blueprint, request, jsonify
# from werkzeug.security import secure_filename
from app.models import Resource
from app.forms import UploadResource

from app.helpers import *

resource_routes = Blueprint('resource_routes', __name__)

@resource_routes.route('/', methods=['POST'])
def upload_resource():
  form = UploadTrackForm()
  # form['csrf_token'].data = request.cookies['csrf_token']

  # if form.validate_on_submit():
  print (request.files)


    # if "url" not in request.files:
    #   returl 'No user_file key in request.files'

    # file = request.files['file']


    # if file and allowed_file(file.filename):
    #   file.filename = secure_filename(file.filename)
    #   output   	  = upload_file_to_s3(file, app.config["S3_BUCKET"])
    #   return str(output)

    # else:
    #     return redirect("/")
