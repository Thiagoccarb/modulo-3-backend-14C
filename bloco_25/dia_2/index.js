const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.status(200).send(
    `port: ${PORT}`,
  )
})

app.listen(PORT, () => console.log(`running on port ${PORT}`));

