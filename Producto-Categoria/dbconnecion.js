
const  mysql = require('mysql');
// database connection 
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'product-category',
    port:3306
  });
  
  // connect to database
  db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
  });
  

  module.exports = db;