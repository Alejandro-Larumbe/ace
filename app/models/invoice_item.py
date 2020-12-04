from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Numeric, Text

class InvoiceItem(db.Model):
  __tablename__ = 'invoice_items'

  id = Column(Integer, primary_key=True)
  date = Column(Date, nullable=False)
  type = Column(String(50), nullable=False)
  description = Column(Text, nullable=False)
  charges = Column(Numeric(6,2), nullable=False)
  invoiceId = Column(Integer, ForeignKey("invoices.id"), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "date": self.date,
      "type": self.type,
      "description": self.description,
      "charges": self.charges,
      "invoiceId": self.invoiceId
    },
