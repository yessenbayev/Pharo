import os
from flask import Flask, render_template, g, request, redirect, jsonify
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.heroku import Heroku
from flask_mail import Mail
from flask_mail import Message
import smtplib



# ##### APP SETUP #####
app = Flask(__name__)
app.config.update(
    DEBUG=True,
    #EMAIL SETTINGS
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME = 'pharo.ucsd@gmail.com',
    MAIL_PASSWORD = 'ece140pharo'
    )
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/pharo'
heroku = Heroku(app)
db = SQLAlchemy(app)
mail = Mail(app)
# ##### DB SETUP #####

class Emails(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(120),unique=False)
	email = db.Column(db.String(120),unique=True)

	def __init__(self, name, email):
            self.name = name
            self.email = email


@app.route('/postmethod', methods = ['POST'])
def get_post_javascript_data():
    name = request.form['jsName']
    email = request.form['jsEmail']
    print("Sent to ",email)
    reg = Emails(name,email)
    db.session.add(reg)
    db.session.commit()
    bd = "Dear Customers,\nThank you so much for signing up for the Pharo newsletter! As we work towards finishing our product, we will be sharing updates with you.\nThank so much for your support once again!\n\nBest Regards,\nTeam Pharo"
    msg = Message("Welcome to Pharo", body=bd, sender="pharo.ucsd@gmail.com", recipients=[email])
    mail.send(msg)
    return None

@app.route("/")
def index():
    return render_template('extend.html')


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
