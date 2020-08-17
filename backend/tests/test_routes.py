from flaskr import flaskr
from flaskr.models import User


@app.route("/test/createUser/")
def createUserTest():
	jeff = User(firstname='Jeff', email="jeff@jeff.edu")
	saved = jeff.save(force_insert=True)
	print(saved.firstname)
	return "User created: " + (saved.firstname or "no")
