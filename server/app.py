from flask import Flask, jsonify
import requests
import logging
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/templates', methods=['GET'])
def get_templates():
   with open('./server/templates.json', 'r') as file:
    data = json.load(file)
    filtered_items = [sandbox for sandbox in data[0]['sandboxes'] if sandbox['custom_template']['icon_url'] 
                  and sandbox['custom_template']['icon_url'].startswith('http')]

    return jsonify([{ "name": "Official Templates", "sandboxes": filtered_items }])

if __name__ == '__main__':
    app.run(debug=True)