from flask import jsonify, request
from mongoengine.connection import connect, disconnect
from mongoengine import DoesNotExist
from flaskr.server import app
from flaskr.models import User
import flaskr.constants as const


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

	
@app.route("/orgs/featured/")
def featuredOrgs():
	return "Here are our featured organizations of the month."
	

@app.route("/orgs/<int:id>")
def getOrg(id):
	return "This is organization %s" % id


#––––––––––––––––––#
# User CRUD routes #
#––––––––––––––––––#
@app.route("/user/create/", methods=["POST"])
def createUser():
	userData = request.json
	newUser = User(firstname=userData['firstname'], lastname=userData['lastname'], email=userData['email'])
	try:
		saved = newUser.save(force_insert=True)
	except:
		return "Error saving user to database."

	return "User created: %s %s" % (saved.firstname, saved.lastname)


@app.route("/user/<string:id>/", methods=["DELETE"])
def deleteUser(id):
	try:
		user = User.objects.get(id=id)
		firstname, lastname = user.firstname, user.lastname
		user.delete()
	except DoesNotExist:
		return "No user with that id."
	except:
		return "An unknown error occurred."

	return "User deleted: %s %s" % (firstname, lastname)


@app.route("/listConnections/")
def listConnections():
	s = ""
	for user in User.objects:
		s += (user.firstname) + "\n"
	return s



