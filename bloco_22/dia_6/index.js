const express = require('express');
const { error } = require('./middlewares/exercicio1');
const { authBTC } = require('./middlewares/exercicio2');
const { id, validate, all, notFound } = require('./middlewares/exercicio3');
const { updateTeams, showTeams } = require('./middlewares/exercicio4/');
const axios = require('axios') ;

const URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();
const useRouter = require('./middlewares/routers/userRouter');
const postRouter = require('./middlewares/routers/postRouters');
const teamsRouter = require('./middlewares/routers/teamsRouter');
const router = require('./middlewares/routers/userRouter');
// exercicio 1
app.use(express.json()); // usando o módulo json do express para leitura do body
app.use('/user', useRouter); // usando router na rota /user;

// exercicio 4
app.use('/teams', teamsRouter); 

// exercicio 2
app.get('/btc/price', authBTC, async(_req, res, next) => {
  const { data }  = await axios.get(URL)
  res.status(200).json(data);
});

// exercicio 3
app.use('/posts', postRouter); // usando router na rota /user;

app.use('*', notFound);
// app.get('/posts', all);
// app.get('/posts/:id',validate, id);

app.use(error);

app.listen(3000, () => console.log('running on port 3000'));

