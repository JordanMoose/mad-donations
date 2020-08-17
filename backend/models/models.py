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
    
class Transaction(EmbeddedDocument):
    transactionID = ObjectIdField()
    time = DateTimeField()
    amount = StringField() #if switch type, just put "old amount -> new amount"
    transaction_type = StringField() # subscribe start, subscribe end, subscribe switch price/genre
    genre = StringField() # if switch type, just put "old genre -> new genre"
class Subscription(Document):
    subscriptionID = ObjectIdField()
    genre = StringField()
    monthlyAmount = FloatField()
    status = StringField() #active, cancelled, or switched
class User(Document):
    userID = ObjectIdField()
    firstname = StringField()
    lastname = StringField()
    email = EmailField()
    transactions = EmbeddedDocumentListField(Transaction)
    activeSubscriptions = ListField(ReferenceField(Subscription))
    expiredSubscriptions = ListField(ReferenceField(Subscription))
    meta = {'collection': 'users'}

class Organization(Document):
    orgID = ObjectIdField()
    categories = ListField(StringField())
    months_active = ListField(StringField()) # each item should be formatted like "8/20"
    total_raised = FloatField()
    meta = {'collection': 'orgs'}

class activeMonth(EmbeddedDocument):
    #this class is for one month of one category
    activeMonthID = ObjectIdField()
    month = StringField() # should be formatted like "8/20"
    orgs = ListField(ReferenceField(Organization))
    total_raised = FloatField()
    notes = StringField() #put other info here, like the cash split or whatever

class Category(Document):
    categoryID = ObjectIdField()
    name = StringField()
    months = EmbeddedDocumentListField(activeMonth)
    meta = {'collection': 'categories'}

