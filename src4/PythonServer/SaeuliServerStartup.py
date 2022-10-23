# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

orders = [
    {"id": 1, "cost": 1.50},
    {"id": 2, "cost": 9.30}
]

items =  [ 
    {"id":1, "amount": 1, "name": "Polenta Maisgriess", "cost":1.95, "discount": 0.95, "total": 0.95},
    {"id":2, "amount": 1, "name": "P.G. Haferfloeckli", "cost":0.70, "total": 0.70},
    {"id":3, "amount": 1, "name": "N.F. Eier 6 St.", "cost":4.95, "total": 4.95},
    {"id":4, "amount": 1, "name": "P.G. Gouda", "cost":1.85, "total": 1.95}
]

checkouts = [
    {"id" : 1, "toPay": 13.70, "available": 13.20 }
]

def _find_next_order_id():
    return max(orders["id"] for order in orders) + 1

def _find_checkout_order_id():
    return max(checkouts["id"] for order in orders) + 1



# @app.post("/api/countries")
# def add_country():
#     if request.is_json:
#         country = request.get_json()
#         country["id"] = _find_next_id()
#         countries.append(country)
#         return country, 201
#     return {"error": "Request must be JSON"}, 415


@app.get("/api/orders")
def get_orders():
    return jsonify(orders)


@app.get("/api/checkout")
def get_checkouts():
    return jsonify(checkouts)



@app.get("/api/items")
def get_items():
    return jsonify(items)

@app.post("/api/donate")
def do_checkout():
    if request.is_json:
        checkout = request.get_json()
        
        return "OK", 200
    return {"error": "Request must be JSON"}, 415

