const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./api-router');

function createExpressApp(database) {
  const app = express();

  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/profiles', express.static(path.join(__dirname, 'profiles')));
  app.use(bodyParser.json());

  app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
  app.use('/api', apiRouter(database));
  app.use('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'))
  });

  return app;
}

module.exports = createExpressApp;
