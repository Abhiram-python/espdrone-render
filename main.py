from flask import Flask,render_template

app = Flask(__name__, template_folder="templates", static_folder="static")

upd_val="20F"

@app.route("/")
def home():
    return render_template("main.html")

@app.route("/update")
def update():
    return upd_val