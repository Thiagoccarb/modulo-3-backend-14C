require('dotenv/config');

const app = require('./app');

const PORT = process.env.DB_PORT || 3000;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
