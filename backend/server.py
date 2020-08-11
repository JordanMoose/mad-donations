from flask import Flask
from flask_cors import CORS
from mongoengine.connection import connect
import backend.constants as const

app = Flask(__name__)
CORS(app)
connect(db='mad-donations', host=const.MONGO_URI)
import backend.routes

if __name__ == "__main__":
    app.run(threaded=True)
