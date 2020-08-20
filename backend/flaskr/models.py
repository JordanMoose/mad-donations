from mongoengine import (
    Document,
    EmbeddedDocument,
    StringField,
    ObjectIdField,
    FloatField,
    EmailField,
    EmbeddedDocumentListField,
    ReferenceField,
    DateTimeField,
    ListField
)

class Cause(Document):
    name = StringField()
    meta = {'collection': 'causes'}

class Organization(Document):
    name = StringField()
    causes = ListField(ReferenceField(Cause))
    monthsActive = ListField(StringField()) # e.g., January 2020
    totalRaised = FloatField()
    meta = {'collection': 'orgs'}

class Subscription(Document):
    cause = ReferenceField(Cause)
    monthlyAmount = FloatField()
    status = StringField()  # active, cancelled, or updated (if the user has since updated their monthly amount for this subscription)
    meta = {'collection': 'subscriptions'}
    
class Transaction(Document):
    time = DateTimeField()
    amount = FloatField()
    cause = ReferenceField(Cause)
    org = ReferenceField(Organization)
    meta = {'collection': 'transactions'}

class User(Document):
    displayName = StringField()
    email = EmailField()
    supportedCauses = ListField(ReferenceField(Cause))
    transactions = ListField(ReferenceField(Transaction))
    activeSubscriptions = ListField(ReferenceField(Subscription))
    expiredSubscriptions = ListField(ReferenceField(Subscription))
    meta = {'collection': 'users'}
