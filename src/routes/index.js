const express = require('express'); 

const loginRouter = require('./persons.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router); 
  router.use('/login', loginRouter);
}

module.exports = routerApi;
