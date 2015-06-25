module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

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

  usersRouter.get('/', function(req, res) {
    var users;
    if (req.query.ids) {
      users = USERS.filter(function(u) {
        return req.query.ids.indexOf(u.id.toString()) > -1;
      });
    } else {
      users = USERS;
    }
    res.send({
      'users': users
    });
  });

  usersRouter.post('/', function(req, res) {
    req.body.user.id = Math.max.apply(Math, USERS.map(function(o){return o.id;})) + 1;
    res.status(201).send(req.body);
    // // NOTE - use the following for testing errors
    // res.status(422).send({
    //   'errors':{
    //     "name": ["Must provide a value"],
    //     "email": ["Must provide a value"],
    //     "password": ["Must provide a value"],
    //   }
    // }).end();
  });

  usersRouter.get('/:id', function(req, res) {
    var user = USERS.filter(function(u) {
      return u.id == req.params.id;
    });
    res.send({
      'user': user
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
