"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# Example json for /sign_up
# {
#     "email": "user@askjeeves.com",
#     "password": "Password_1"
# }

@api.route('/sign_up', methods=['POST'])
def handle_sign_up():
    recieved_user = request.get_json()
    print(recieved_user)
    new_user = User()
    new_user.email = recieved_user["email"]
    new_user.password = recieved_user["password"]
    new_user.is_active = True

    db.session.add(new_user)
    db.session.commit()

    response_body = {
        "message": "User created!"
    }

    return jsonify(response_body), 200

# @api.route('/token', method=['POST'])
# def handle_token_request():
#     recieved_data = request.get_json()
#     print(recieved_data)

#     # current_user = User.query.filter_by(email=recieved_data["email"]).first()
#     # print(current_user)

#     # if current_user:
#     #     # if current_user.check_password(current_user["password"]):
#     #     if current_user.password == current_user["password"]:
#     #         print("TOKEN HERE!")
#     #     else:
#     #         print("WRONG PASSWORD")
#     # else:
#     #     print("EMAIL DOESNT EXIST")

#     response_body = {
#         "message": "trying for a token eh?"
#     }

#     return jsonify(response_body), 200

@api.route('/token', methods=['POST'])
def handle_token_request():
    # Process the information coming from the client
    recieved_data = request.get_json()
    print(recieved_data)
    
    # We create an instance without being recorded in the database
    current_user = User.query.filter_by(email=recieved_data["email"]).first() #sets user to active user to be saved into favorite
    # current_user = {"password": "1234"}
    print(current_user)

    if current_user:
        # if current_user.check_password(current_user["password"]):
        if current_user.password == recieved_data["password"]:
            print("TOKEN HERE!")
        else:
            print("WRONG PASSWORD")
    else:
        print("EMAIL DOESNT EXIST")
    
    # Notice that we are passing in the actual sqlalchemy user object here

    return jsonify("after a token eh?")