# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

countries = [
    {"id": 1, "name": "Thailand", "capital": "Bangkok", "area": 513120},
    {"id": 2, "name": "Australia", "capital": "Canberra", "area": 7617930},
    {"id": 3, "name": "Egypt", "capital": "Cairo", "area": 1010408},
]

orders = [
    {"id": 1, "cost": 1.50},
    {"id": 2, "cost": 9.30}
]

def _find_next_id():
    return max(country["id"] for country in countries) + 1

@app.get("/api/countries")
def get_countries():
    return jsonify(countries)

@app.post("/api/countries")
def add_country():
    if request.is_json:
        country = request.get_json()
        country["id"] = _find_next_id()
        countries.append(country)
        return country, 201
    return {"error": "Request must be JSON"}, 415



@app.get("/api/orders")
def get_orders():
    return jsonify(orders)