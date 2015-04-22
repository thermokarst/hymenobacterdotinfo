module.exports = function(app) {
  var express = require('express');
  var jwt = require('jsonwebtoken');
  var authenticateRouter = express.Router();

  var USERS = [
    {
      id: 1,
      email: 'testA',
      name: 'Test Admin User',
      role: 'A',
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null
    },
    {
      id: 2,
      email: 'testR',
      name: 'Test Read User',
      role: 'R',
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null
    },
    {
      id: 3,
      email: 'testW',
      name: 'Test Write User',
      role: 'W',
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null
    }
  ]

  authenticateRouter.post('/', function(req, res) {
    // wait for a bit to simulate cold boot of heroku api
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}

    if ((req.body.email === 'testA' || req.body.email === 'testR' || req.body.email === 'testW'  )
        && req.body.password === 'test') {
      var user = USERS.filter(function(u) {
        if (u.email == req.body.email) {
          return u;
        }
      })[0];
      var token = jwt.sign({
        'name': user.name,
        'role': user.role
      }, 'secret',
      {
        expiresInMinutes: 60,
        issuer: 'bactdb',
        subject: user.id,
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
