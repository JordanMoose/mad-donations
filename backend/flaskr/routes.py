from flask import jsonify, request
from mongoengine.connection import connect, disconnect
from mongoengine import DoesNotExist
from flaskr.server import app
from flaskr.models import User, Subscription
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


#–––––––––––––#
# User routes #
#–––––––––––––#
@app.route("/user/create/", methods=["POST"])
def createUser():
	userData = request.json
	newUser = User(firstname=userData['firstname'], lastname=userData['lastname'], email=userData['email'])
	try:
		saved = newUser.save(force_insert=True)
	except:
		return "Error saving user to database."

	return "User created: %s %s" % (saved.firstname, saved.lastname)


@app.route("/user/<string:email>/", methods=["PATCH"])
def editUserInfo(email):
	try:
		user = User.objects.get(email=email)
	except DoesNotExist:
		return "No user with that email."
	except:
		return "An unknown error occurred."

	updateData = request.json
	print(updateData)
	for k, v in updateData.items():
		user[k] = v
	try:
		saved = user.save()
	except:
		"Error updating user."
	
	return "Info updated for user: %s %s" % (user.firstname, user.lastname)


@app.route("/user/<string:email>/", methods=["DELETE"])
def deleteUser(email):
	try:
		user = User.objects.get(email=email)
		firstname, lastname = user.firstname, user.lastname
		user.delete()
	except DoesNotExist:
		return "No user with that email."
	except:
		return "An unknown error occurred."

	return "User deleted: %s %s" % (firstname, lastname)


@app.route("/user/<string:email>/causes/", methods=["GET"])
def getUserCauses(email):
	try:
		user = User.objects.get(email=email)
	except DoesNotExist:
		return "No user with that email."
	except:
		return "An unknown error occurred."
	
	return str(user.supportedCauses)

@app.route("/user/<string:email>/activeSubscriptions/", methods=["GET"])
def getUserActiveSupscriptions(email):
	try:
		user = User.objects.get(email=email)
	except DoesNotExist:
		return "No user with that email."
	except:
		return "An unknown error occurred."
	
	return str(user.activeSubscriptions)


@app.route("/user/<string:email>/expiredSubscriptions/", methods=["GET"])
def getUserExpiredSupscriptions(email):
	try:
		user = User.objects.get(email=email)
	except DoesNotExist:
		return "No user with that email."
	except:
		return "An unknown error occurred."
	
	return str(user.expiredSubscriptions)


#–––––––––––––––––––––#
# Subscription Routes #
#–––––––––––––––––––––#
@app.route("/subscription/create/", methods=["POST"])
def createSubscription():
	subData = request.json
	newSub = Subscription(cause=subData['cause'], monthlyAmount=subData['monthlyAmount'], status=subData['status'])
	try:
		saved = newSub.save(force_insert=True)
	except:
		return "Error saving subscription to database."
	
	return "Subscription created: %s" % (saved.id)


# Deleting a subscription means updating status to expired
@app.route("/subscription/<string:id>/delete/", methods=["PATCH"])
def deleteSubscription(id):
	try:
		sub = Subscription.objects.get(id=id)
	except DoesNotExist:
		return "No subscription with that id."
	except:
		return "An unknown error occurred."

	if sub.status == "expired":
		return "This subscription is already expired."
	expired = sub.modify(status="expired")
	if not expired:
		return "Error moving subscription from active to expired."

	return "Subscription deleted: %s" % (id)


@app.route("/subscription/<string:id>/edit/", methods=["PATCH"])
def editSubscriptionAmount(id):
	try:
		oldSub = Subscription.objects.get(id=id)
	except DoesNotExist:
		return "No subscription with that id."
	except:
		return "An unknown error occurred."

	if oldSub.status == 'expired':
		return "This subscription is expired."
	if oldSub.status == 'updated':
		return "You tried to access a subscription whose monthly amount has alredy been updated. Make sure to use the most recent (active) subscription."

	updateData = request.json
	newMonthlyAmount = updateData['monthlyAmount']
	if newMonthlyAmount == oldSub.monthlyAmount:
		return "No change in subscription monthly amount. Skipping update."

	updated = oldSub.modify(status='updated')
	if not updated:
		return "Error changing old subscription status to updated."

	newSub = Subscription(cause=oldSub.cause, monthlyAmount=newMonthlyAmount, status='active').save()
	return "Monthly amount for subscription %s updated from $%.2f to $%.2f." % (newSub.id, oldSub.monthlyAmount, newSub.monthlyAmount)


@app.route("/listConnections/")
def listConnections():
	s = ""
	for user in User.objects:
		s += (user.firstname) + "\n"
	return s
