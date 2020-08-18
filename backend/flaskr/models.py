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

class Subscription(Document):
    subscriptionID = ObjectIdField()
    cause = StringField()
    monthlyAmount = FloatField()
    status = StringField()  # active, cancelled, or updated (if the user has since updated their monthly amount for this subscription)
    meta = {'collection': 'subscriptions'}
    
class Transaction(Document):
    transactionID = ObjectIdField()
    time = DateTimeField()
    amount = FloatField()
    transactionType = StringField() # subscribe start, subscribe end, subscribe switch price/cause
    cause = StringField()
    meta = {'collection': 'transactions'}

class User(Document):
    userID = ObjectIdField()
    firstname = StringField()
    lastname = StringField()
    email = EmailField()
    supportedCauses = ListField(StringField())
    transactions = ListField(ReferenceField(Transaction))
    activeSubscriptions = ListField(ReferenceField(Subscription))
    expiredSubscriptions = ListField(ReferenceField(Subscription))
    meta = {'collection': 'users'}

class Organization(Document):
    orgID = ObjectIdField()
    categories = ListField(StringField())
    monthsActive = ListField(StringField()) # each item should be formatted like "8/20"
    totalRaised = FloatField()
    meta = {'collection': 'orgs'}

class ActiveMonth(EmbeddedDocument):
    # this class is for one month of one category
    activeMonthID = ObjectIdField()
    month = StringField() # should be formatted like "8/20"
    orgs = ListField(ReferenceField(Organization))
    totalRaised = FloatField()
    notes = StringField()  # put other info here, like the cash split or whatever
    
class Category(Document):
    categoryID = ObjectIdField()
    name = StringField()
    months = EmbeddedDocumentListField(ActiveMonth)
    meta = {'collection': 'categories'}
