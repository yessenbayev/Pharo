import os
from flask import Flask, render_template, g, request, redirect, jsonify
# from flask_sqlalchemy import SQLAlchemy
# from flask_heroku import Heroku
# from flask_mail import Mail
# from flask_mail import Message
# import smtplib

# def dict_factory(cursor, row):
#     d = {}
#     for idx, col in enumerate(cursor.description):
#       d[col[0]] = row[idx]
#     return d

##### APP SETUP #####
app = Flask(__name__)
# app.config.update(
#     DEBUG=True,
#     #EMAIL SETTINGS
#     MAIL_SERVER='smtp.gmail.com',
#     MAIL_PORT=465,
#     MAIL_USE_SSL=True,
#     MAIL_USERNAME = 'pharo.ucsd@gmail.com',
#     MAIL_PASSWORD = 'ece140pharo'
#     )
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/pharo'
# heroku = Heroku(app)
# db = SQLAlchemy(app)
# mail = Mail(app)
# # ##### DB SETUP #####

# class Emails(db.Model):
# 	id = db.Column(db.Integer, primary_key=True)
# 	name = db.Column(db.String(120),unique=False)
# 	email = db.Column(db.String(120),unique=True)

# 	def __init__(self, name, email):
#             self.name = name
#             self.email = email

# # Setup the database credentials
# app.config.update(dict(
#     DATABASE=os.path.join(app.root_path, 'flaskapp.db'),
#     DEBUG=True,
#     SECRET_KEY=b'<SOME HEXADECIMAL SECRET KEY>',
#     USERNAME='admin',
#     PASSWORD='<jerryyang1997'
# ))

# #Connect to the DB
# def connect_db():
#     """Connects to the specific database."""
#     rv = sqlite3.connect(app.config['DATABASE'])
#     rv.row_factory = dict_factory
#     return rv

# # Wrap the helper function so we only open the DB once
# def get_db():
#     """Opens a new database connection if there is none yet for the
#     current application context.
#     """
#     if not hasattr(g, 'sqlite_db'):
#         g.sqlite_db = connect_db()
#     return g.sqlite_db

# # Create the database (we do this via command line!!!)
# def init_db():
#     """Initializes the database."""
#     db = get_db()
#     with app.open_resource('schema.sql', mode='r') as f:
#         db.cursor().executescript(f.read())
#     db.commit()

# # Command to create the database via command line
# # You call it from command line: flask initdb
# @app.cli.command('initdb')
# def initdb_command():
#     """Creates the database tables."""
#     init_db()
#     print('Initialized the database.')

# # Close the database when the request ends
# @app.teardown_appcontext
# def close_db(error):
#     """Closes the database again at the end of the request."""
#     if hasattr(g, 'sqlite_db'):
#         g.sqlite_db.close()

##### ROUTES #####

#@app.route('/')
#def layout():
#	return render_template('extend.html')

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
    # return redirect(url_for('thankyou'))
    #return render_template('thankyou.html')

@app.route("/thankyou/")
def thankyou():
    return render_template('thankyou.html')

@app.route("/")
def index():
    return render_template('extend.html')

@app.route("/CompetitiveAdvantage/")
def stuff():
    return render_template('CompetitiveAdvantage.html')


# @app.route('/signup', methods=['GET','POST']) #to differentiate between the two commands
# def GET_signup():
#     if (request.method == 'GET'):
#         return render_template('signup.html')

#     elif (request.method == 'POST'):
#         first_name = request.form['firstname']
#         last_name = request.form['lastname']
#         email = request.form['email']
#         if (first_name == '' or last_name == '' or email == '') :
#             return render_template('signup.html', error_msg='Please fill all input fields')

#         elif '@' not in email:
#             return render_template('signup.html', error_msg='Please fill valid email address')

#         elif not email[-1].isalpha():
#             return render_template('signup.html', error_msg='Please fill valid email address')

#         else :
#             db = get_db()
#             db.execute('insert into Data (first_name, last_name, email) values (?, ?, ?)',
#                             [first_name, last_name, email])
#             db.commit()

#             #Change Sender to email sending out thank you message
#             msg = Message("Thank you for signing up for the EasyDoor Newsletter!",
#                   sender="easylock.newsletter.notification@gmail.com",
#                   recipients=[email])
#             msg.body = "Dear wonderful recipient,\nThank you so much for signing up for the EasyDoor Newsletter! As we work towards finalizing our product, we will be sure to keep you as updated as possible.\nThanks so much for your support once again!\n\nBest Regards,\nEasylock Team"
#             mail.send(msg)
#             return render_template('signup_confirm.html')


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
