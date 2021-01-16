from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean
from .resource_category import ResourceCategory
from .resource_collection import ResourceCollection


class Resource(db.Model):
  __tablename__ = 'resources'

  id = Column(Integer, primary_key=True)
  title = Column(String(100), nullable=False)
  url = Column(String(1000), nullable=False)
  instructor_id = Column(Integer, ForeignKey("users.id"), nullable=False)
  resource_type_id = Column(Integer, ForeignKey("resource_types.id"), nullable=False)
  resource_category_id = Column(Integer, ForeignKey(ResourceCategory.id))
  resource_collection_id = Column(Integer, ForeignKey(ResourceCollection.id))

  def to_dict(self):
    return {
      "id": self.id,
      "resource_type_id": self.resource_type_id,
      "resource_category_id": self.resource_category_id,
      "resource_collection_id": self.resource_collection_id,
      "title": self.title,
      "url": self.url,
      "instructor_id": self.instructor_id
    }

  def to_dict_camel(self):
    return {
      "id": self.id,
      "resourceTypeId": self.resource_type_id,
      "resourceCategoryId": self.resource_category_id,
      "resourceCollectionId": self.resource_collection_id,
      "title": self.title,
      "url": self.url,
      "instructorId": self.instructor_id
    }
