from mongoengine import *


class Transaction(EmbeddedDocument):
    transactionID = ObjectIdField()

class Subscription(EmbeddedDocument):
    subscriptionID = ObjectIdField()
    genre = StringField()
    monthlyAmount = FloatField()
class User(Document):
    userID = ObjectIdField()
    firstname = StringField()
    lastname = StringField()
    email = EmailField()
    transactions = EmbeddedDocumentListField(Transaction)
    subscriptions = EmbeddedDocumentListField(Subscription)

    meta = {'collection': 'users'}