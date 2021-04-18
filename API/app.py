from flask import Flask, redirect, url_for
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

mongoClient = MongoClient("mongodb+srv://admin:scube@scube.5egfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = mongoClient.get_database('user_db')
names_col = db.get_collection('names_col')
student_records = db.get_collection('student_records')

@app.route('/addname/<name>/')
def addname(name):
    names_col.insert_one({"name": name.lower()})
    return redirect(url_for('getnames'))

@app.route('/getnames/')
def getnames():
    names_json = []
    if names_col.find({}):
        for name in names_col.find({}).sort("name"):
            names_json.append({"name": name['name'], "id": str(name['_id'])})
    return json.dumps(names_json)

@app.route('/login/<username>&<password>/')
def login(username, password):
    success = student_records.count_documents({'username': username, 'password': password}) == 1
    return ({"success": success})

@app.route('/api/register/<username>&<password>')
def register(username, password):
    student_records.insert({'username': username, 'password': password,'fname':fname,'lname':lname})
    return (1)

if __name__ == "__main__":
    app.run(debug=True)

