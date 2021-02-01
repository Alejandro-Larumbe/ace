from app.models import Resource, db


def seed_resources():
  resources = [
    Resource(
      # id=1,
      title='Ysaye Sonata 3',
      url='https://ace-management.s3.us-east-2.amazonaws.com/resources/Ysaye_Sonata_3.mp4_d2203b9e-ce5b-4c90-ab5d-6c0e04f0d4e5',
      instructor_id=1,
      resource_type_id=3,
      resource_category_id=None,
      resource_collection_id=None,
    ),
    Resource(
      # id=2,
      title='Suzuki Book 1',
      url='https://ace-management.s3.us-east-2.amazonaws.com/resources/Suzuki+Violin+Method+-+Vol+01.pdf_958a3d80-d4e7-4c11-92e1-352861ba19e4',
      instructor_id=1,
      resource_type_id=1,
      resource_category_id=None,
      resource_collection_id=None,
    ),
    Resource(
      # id=3,
      title='Suzuki Book 2',
      url='https://ace-management.s3.us-east-2.amazonaws.com/resources/Suzuki%2BViolin%2BVolume%2B-%2B02.pdf_bf386895-c2f7-4ac0-934d-d27795e6245a',
      instructor_id=1,
      resource_type_id=1,
      resource_category_id=None,
      resource_collection_id=None,
    ),
    Resource(
      # id=4,
      title='Paganini 24 Caprices',
      url='https://ace-management.s3.us-east-2.amazonaws.com/resources/Paganini_24_caprices.pdf_fb98e0f4-6812-42e4-9786-57987c9700b8',
      instructor_id=1,
      resource_type_id=1,
      resource_category_id=None,
      resource_collection_id=None,
    ),
    Resource(
      # id=5,
      title='I Will Survive',
      url='https://ace-management.s3.us-east-2.amazonaws.com/resources/I_will_survive.mp4_36325ed1-f5a4-4f13-8c71-9197b5cc542c',
      instructor_id=1,
      resource_type_id=3,
      resource_category_id=None,
      resource_collection_id=None,
    ),
    Resource(
      # id=6,
      title='Contemporary Violin Technique Scales',
      url='https://ace-management.s3.us-east-2.amazonaws.com/resources/dlscrib.com-pdf-galamian-contemporary-violin-technique-scales-dl_89baf79ec922d8863966d3428c8ee2c3.pdf_76401ee4-9bac-4430-b701-7b53fffecb6a',
      instructor_id=1,
      resource_type_id=1,
      resource_category_id=None,
      resource_collection_id=None,
    ),
    Resource(
      # id=7,
      title='Paganini Caprice 5',
      url='https://ace-management.s3.us-east-2.amazonaws.com/resources/Caprice5_Sumine.mp4_0c78d02b-7cf1-41d9-9d17-b95948594e34',
      instructor_id=1,
      resource_type_id=3,
      resource_category_id=None,
      resource_collection_id=None,
    ),
    Resource(
      # id=8,
      title='Paganini Caprice 24',
      url='https://ace-management.s3.us-east-2.amazonaws.com/resources/Caprice24_David_Garret.mp4_a5241449-eed9-4325-bc93-cf29f0dbbd0c',
      instructor_id=1,
      resource_type_id=3,
      resource_category_id=None,
      resource_collection_id=None,
    ),
    Resource(
      # id=9,
      title='Bach Sarabande',
      url='https://ace-management.s3.us-east-2.amazonaws.com/resources/Bach-Sarabande.mp4_d838c541-f0fe-4ff9-a73d-bd498b3d443f',
      instructor_id=1,
      resource_type_id=3,
      resource_category_id=None,
      resource_collection_id=None,
    ),
    Resource(
      # id=10,
      title='O Come Little Children',
      url='https://ace-management.s3.us-east-2.amazonaws.com/resources/10+O+Come+Little+Children.mp3_1aafe254-acc1-41aa-9fa1-d8013d11695d',
      instructor_id=1,
      resource_type_id=2,
      resource_category_id=None,
      resource_collection_id=None,
    ),
    Resource(
      # id=11,
      title='May Song',
      url='https://ace-management.s3.us-east-2.amazonaws.com/resources/11+May+Song.mp3_28112907-c8e4-41a8-88d0-47fa0876d8d4',
      instructor_id=1,
      resource_type_id=2,
      resource_category_id=None,
      resource_collection_id=None,
    ),
    Resource(
      # id=12,
      title='Lightly Row',
      url='https://ace-management.s3.us-east-2.amazonaws.com/resources/7+Lightly+Row.mp3_d6ead096-f12b-4c28-ba8b-f11076ff545d',
      instructor_id=1,
      resource_type_id=2,
      resource_category_id=None,
      resource_collection_id=None,
    ),
  ]
  db.session.add_all(resources)
  db.session.commit()

def undo_resources():
  db.session.execute('TRUNCATE TABLE resources RESTART IDENTITY CASCADE;')
  db.session.commit()
