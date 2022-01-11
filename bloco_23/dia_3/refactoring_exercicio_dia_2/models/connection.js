const mysql = require('mysql2/promise'); 

var connection = null; 

module.exports = () => {
  return connection ? connection : connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'thiago',
    database: 'cep_lookup'
  });
};