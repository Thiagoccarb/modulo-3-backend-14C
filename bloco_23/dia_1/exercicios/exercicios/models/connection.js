const mysql = require('mysql2/promise'); // utilizando a versão com promise;

var connection = null; // singleton-- iniciando a variável como null;

module.exports = () => {
  return connection ? connection : connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'thiago',
    database: 'model_example'
  });
};