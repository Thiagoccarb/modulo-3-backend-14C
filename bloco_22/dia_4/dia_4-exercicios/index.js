const fs = require('fs/promises');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


// exercicio 1
app.get('/ping', (req, res, next) => {
  try {
    return res.status(200).json({ message: 'pong' })
  } catch(err) {
    next(err)
  }
});

// exercicio 2
 app.post('/hello', (req, res, next) => {
   const { name } = req.body;
   try {
     return res.status(201).json({ message: `Hello, ${name}!`})
   } catch(err) {
     next(err)
   }
 });

// exercicio 3
 app.post('/greetings', (req, res, next) => {
   const { name, age } = req.body;
   try {
     if(parseInt(age, 10) <= 17) return res.status(401).json({ message: 'Unauthorized' })
     return res.status(200).json({ message: `Hello, ${name}` })
   } catch(err) {
     next(err)
   }
 });

// exercicio 4
 app.post('/users/:name/:age', (req, res, next) => {
   const { name, age } = req.params;
   try {
     return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos` })
   } catch(err) {
     next(err)
   }
 });

 app.use((err, req, res, next) => {
   return res.status(500).send({ message: err.message })
 })

app.listen(3000, () => console.log('ouvindo porta 3000'));
