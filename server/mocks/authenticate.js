module.exports = function(app) {
  var express = require('express');
  var jwt = require('jsonwebtoken');
  var authenticateRouter = express.Router();

  authenticateRouter.post('/', function(req, res) {
    // wait for a bit to simulate cold boot of heroku api
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}

    if (req.body.email === 'test' && req.body.password === 'test') {
      var token = jwt.sign({
        'name': 'Test User',
        'role': 'A'
      }, 'secret',
      {
        expiresInMinutes: 60,
        issuer: 'bactdb',
        subject: 'test',
      });
      res.send({
        'token': token
      });
    } else {
      res.status(401).send({'error':'Invalid username or password'});
    }
  });

  app.use('/api/authenticate', authenticateRouter);
};
