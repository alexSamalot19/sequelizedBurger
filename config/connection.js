// Set up MySQL connection.
//========================================================
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(require('./db-config'));
};
// Make connection.
//========================================================
connection.connect();

//Export the connection.
//========================================================
module.exports = connection;