module.exports = function(app) {
  var express = require('express');
  var jwt = require('jsonwebtoken');
  var authenticateRouter = express.Router();

  authenticateRouter.post('/', function(req, res) {
    var token = jwt.sign({
      'name': 'Test User',
      'role': 'admin'
    }, 'secret',
    {
      expiresInMinutes: 60,
      issuer: 'bactdb',
      subject: 'Test User',
    });
    res.send({
      'token': token
    });
  });

  app.use('/api/authenticate', authenticateRouter);
};
