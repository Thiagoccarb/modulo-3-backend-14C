require('dotenv').config();
const express = require('express');

const app = express();

const { PORT } = process.env || 3000;

app.get('/', (_req, res) => {
  res.status(200).send(`text: ${process.env.TEXT}`);
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));