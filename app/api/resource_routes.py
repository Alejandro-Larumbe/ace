from flask import Blueprint, request, jsonify
# from werkzeug.security import secure_filename
from app.models import Resource
from app.forms import UploadResource

from app.helpers import client
from app.config import Config

import binascii
import os
import boto3
# from botocore.exceptions import ClientError
import uuid

resource_routes = Blueprint('resource_routes', __name__)


s3 = boto3.resource('s3')
client = boto3.client('s3',
                      aws_access_key_id=Config.S3_KEY,
                      aws_secret_access_key=Config.S3_SECRET
)

@resource_routes.route('/', methods=['POST'])
def upload_resource():
  pass

    # try:

    #   form = UploadResource()
    #   form['csrf_token'].data = request.cookies['csrf_token']

    #   if form.validate_on_submit():
    #       key_list = request.files.keys()
    #       if request.files:
    #         if "url" in key_list:
    #           new_file_data = request.files["url"]
    #           new_file_key = f"resources/{new_file_data.filename}_{uuid.uuid4()}"
    #           client.put_object(Body=new_file_data, Bucket=Config.S3_BUCKET, Key=new_file_key,
    #                             ContentType=new_file_data.mimetype, ACL="public-read")
    #           resource = Resource(
    #               title=form.data['title'],
    #               url=f"https://ace-management.s3.us-east-2.amazonaws.com//{new_file_key}",
    #               instructor_id=form.data['instructor_id'],
    #               resource_type_id=form.data['resource_type_id'],
    #               )
    #           db.session.add(resource)
    #           db.session.commit()
    #           return resource.to_dict()
    # except Exception as error:
    #   return jsonify(error=repr(error))




  # form['csrf_token'].data = request.cookies['csrf_token']

  # if form.validate_on_submit():
  # print (request.files)


    # if "url" not in request.files:
    #   returl 'No user_file key in request.files'

    # file = request.files['file']


    # if file and allowed_file(file.filename):
    #   file.filename = secure_filename(file.filename)
    #   output   	  = upload_file_to_s3(file, app.config["S3_BUCKET"])
    #   return str(output)

    # else:
    #     return redirect("/")
