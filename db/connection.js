const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pax3ph2003',
    database: 'employee_db'
})

module.exports = db;