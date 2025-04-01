from flask import Flask, render_template, request, redirect
import mysql.connector

app = Flask(__name__)

# Database configuration
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="vijit",
    database="nc_tower"
)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        address = request.form['address']
        message = request.form['message']
        
        cursor = db.cursor()
        query = "INSERT INTO queries (name, email, phone, address, message) VALUES (%s, %s, %s, %s, %s)"
        values = (name, email, phone, address, message)
        cursor.execute(query, values)
        db.commit()
        cursor.close()
        
        return redirect('/?success=true')

if __name__ == '__main__':
    app.run(debug=True)