import os
from controller import Controller
from flask import Flask, render_template, g, request, redirect, jsonify

##### APP SETUP #####
app = Flask(__name__)
c = Controller("lockState.txt")
c.read()

##### ROUTES #####

@app.route('/lock')
def change_setting():
    if(c.settings["locked"]):
        c.settings["locked"] = 0
    else:
        c.settings["locked"] = 1
    c.write()
    return jsonify(c.settings)

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
