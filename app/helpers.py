import boto3, botocore
from .config import Config

# s3 = boto3.client(
#    "s3",
#    aws_access_key_id=Config.S3_KEY,
#    aws_secret_access_key=Config.S3_SECRET
# )

s3 = boto3.resource('s3')
client = boto3.client('s3',
                      aws_access_key_id=Config.S3_KEY,
                      aws_secret_access_key=Config.S3_SECRET
)

# def upload_file_to_s3(file, bucket_name, acl="public-read"):

#     """
#     Docs: http://boto3.readthedocs.io/en/latest/guide/s3.html
#     """

#     try:

#         s3.upload_fileobj(
#             file,
#             "ace-management",
#             file.filename,
#             ExtraArgs={
#                 "ACL": acl,
#                 "ContentType": file.content_type
#             }
#         )

#     except Exception as e:
#         print("Something Happened: ", e)
#         return e

#     return "{}{}".format(app.config["S3_LOCATION"], file.filename)
