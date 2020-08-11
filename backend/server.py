from flask import Flask
from flask_cors import CORS
from mongoengine.connection import connect, disconnect
import backend.constants as const
from backend.models.models import User

app = Flask(__name__)
CORS(app)
import backend.routes

connect(db='mad-donations', host=const.MONGO_URI)

if __name__ == "__main__":
    app.run(threaded=True)
