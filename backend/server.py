from flask import Flask
from flask_cors import CORS
from mongoengine.connection import connect, disconnect
import backend.constants as const
from backend.models.models import User

app = Flask(__name__)
CORS(app)

connect(db='mad-donations', host=const.MONGO_URI)

@app.route("/")
def hello():
    return "Hello world"

@app.route("/connect/")
def connectToMongo():
    connect(db='mad-donations', host=const.MONGO_URI)
    return "Connected to mongo?"

@app.route("/disconnect/")
def resetMongo():
    disconnect()
    return "Maybe disconnected from Mongo"

# Test endpoint to get React, Flask, and Mongo hooked up
@app.route("/getUser/id/<string:id>/")
def getUserById(id):
    return {
        '_id': "512123",
        'name': "danielle"
    }

@app.route("/getUser/name/<string:name>/")
def getUserByName(name):
    return {
        '_id': '1234',
        'firstName': 'Adam',
        'lastName': 'Ash'
    }

@app.route("/home/")
def home():
    return "This is the homepage"


@app.route("/login/")
def login():
    return "This is the login page"


@app.route("/account/")
def account():
    return "You shouldn't be here!"


@app.route("/account/<int:id>/")
def getInfo(id):
    return "This is account %s" % id

@app.route("/orgs/")
def orgs():
    return "Here are all of our orgs"

@app.route("/orgs/<int:id>")
def getOrg(id):
    return "This is organization %s" % id

@app.route("/createUser/")
def createUser():
    jeff = User(firstname='Adam', email="adamash99@gmail.com")
    saved = jeff.save(force_insert=True)
    print(saved.firstname)
    return ("user created maybe")

@app.route("/listConnections/")
def listConnections():
    s = ""
    for user in User.objects:
        s += (user.firstname) + "\n"
    return s

if __name__ == "__main__":
    app.run()
