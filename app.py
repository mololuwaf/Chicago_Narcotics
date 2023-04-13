from flask import Flask, jsonify
import psycopg2
import json
from flask_cors import CORS

conn = psycopg2.connect (
    dbname ='Chicagoproject3',
    user = 'postgres',
    password = 'Postgres',
    host = 'localhost',
    port ='5432'
)
app = Flask(__name__,template_folder="template")
CORS(app)
@ app.route('/getdata')
def getdata():
    cur = conn.cursor()
    cur.execute('SELECT * FROM test2;')
    data = cur.fetchall()
    cur.close()
    headers = [desc[0] for desc in cur.description]
    result = [dict(zip(headers, row)) for row in data]
    print('Data accessed from database:',data)
    return jsonify(result)


if __name__ == '__main__':
    app.debug=True
    app.run()