module.exports = function(app) {
  var express = require('express');
  var generaRouter = express.Router();

  var GENERA = [
    {
      id: 1,
      genusName: "Genus One",
      species: [1,2],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
    },
    {
      id: 2,
      genusName: "Genus Two",
      species: [3],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
    },
    {
      id: 3,
      genusName: "Genus Three",
      species: [4],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
    }
  ];

  generaRouter.get('/', function(req, res) {
    res.send({
      'genera': GENERA
    });
  });

  generaRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  generaRouter.get('/:id', function(req, res) {
    var genus = GENERA.filter(function(g) {
      return req.params.id.indexOf(g.id.toString()) > -1;
    });
    res.send({
      'genus': genus[0]
    });
  });

  generaRouter.put('/:id', function(req, res) {
    var genus = GENERA.filter(function(g) {
      return req.params.id.indexOf(g.id.toString()) > -1;
    });
    res.send({
      'genus': genus[0]
    });
  });

  generaRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/genera', generaRouter);
};
