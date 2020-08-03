from flask import Flask
from pymongo import MongoClient
import backend.constants as const

app = Flask(__name__)

client = MongoClient(const.MONGO_URI)
db = client['mad-donations']

@app.route("/")
def hello():
    user = db.users.find_one()
    return user['name']
    
@app.route("/about/")
def about():
    return "This is what we're all about!"

@app.route("/users/")
def users():
    return "Users"

@app.route("/users/<string:name>/")
def getMember(name):
    return "Hello %s" % name

@app.route("/users/add/<string:name>/")
def addMember(name):
    post = {
        'name': name,
    }
    user_id = db.users.insert_one(post).inserted_id
    return "Here is user_id: %s" % user_id

if __name__ == "__main__":
    app.run()
    client.close()