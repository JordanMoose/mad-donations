from flask import Flask
from flask_cors import CORS
from mongoengine import *
import backend.constants as const

app = Flask(__name__)
CORS(app)

connect('mad-donations', host=const.MONGO_URI)


@app.route("/")
def hello():
    return "Hello world"

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


if __name__ == "__main__":
    app.run()
    client.close()
