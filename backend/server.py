from flask import Flask
from flask_mongoengine import MongoEngine
from backend.models.models import User

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'db': 'dbname',
    'host': 'localhost',
    'port': 27017
}
db = MongoEngine()
db.init_app(app)

@app.route("/")
def hello():
    return "Hello World!"
    
@app.route("/about/")
def about():
    return "This is what we're all about!"

@app.route("/users/")
def users():
    return "Users"

@app.route("/users/<string:name>/")
def getMember(name):
    return "Hello %s" % name

if __name__ == "__main__":
    app.run()