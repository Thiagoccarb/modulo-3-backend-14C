// npm instal mysql2 --- driver para comunicação com o mysql;
const mysql = require('mysql2/promise'); // utilizando a versão com promise;

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'thiago',
  database: 'model_example'
});

module.exports = connection;