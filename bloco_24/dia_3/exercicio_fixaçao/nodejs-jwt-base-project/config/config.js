require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  dialect: 'mysql',
}

module.exports = {
  development: {
    ...config,
    database: 'jwt_exercise_dev'
  },
  test: {
    ...config,
    database: 'jwt_exercise_test'
  },
  production: {
    ...config,
    database: 'jwt_exercise'
  },
};
