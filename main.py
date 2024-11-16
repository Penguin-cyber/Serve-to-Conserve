from flask import Flask, url_for, render_template, redirect, request, session

app = Flask(__name__)

# Navigation to other pages


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/templates/log outfit.html')
def log_outfit():
    return render_template('log outfit.html')


@app.route('/templates/add clothes.html')
def add_clothes():
    return render_template('add clothes.html')


@app.route('/templates/wardrobe.html')
def wardrobe():
    return render_template('wardrobe.html')


@app.route('/templates/friends.html')
def friends():
    return render_template('friends.html')


@app.route('/templates/trade.html')
def trade():
    return render_template('trade.html')


@app.route('/templates/donation map.html')
def donation_map():
    return render_template('donation map.html')


if __name__ == "__main__":
    app.run(debug=True)
