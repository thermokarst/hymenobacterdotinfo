module.exports = function(app) {
  var express = require('express');
  var speciesRouter = express.Router();

  var SPECIES = [
    {
      id: 1,
      genus: 1,
      speciesName: "Species One",
      strains: [1],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
    },
    {
      id: 2,
      genus: 1,
      speciesName: "Species Two",
      strains: [2],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
    },
    {
      id: 3,
      genus: 2,
      speciesName: "Species Three",
      strains: [3],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
    },
    {
      id: 4,
      genus: 3,
      speciesName: "Species Four",
      strains: [4],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
    }
  ];

  speciesRouter.get('/', function(req, res) {
    res.send({
      'species': SPECIES
    });
  });

  speciesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  speciesRouter.get('/:id', function(req, res) {
    var species = SPECIES.filter(function(s) {
      return req.params.id.indexOf(s.id.toString()) > -1;
    });
    res.send({
      'species': species[0]
    });
  });

  speciesRouter.put('/:id', function(req, res) {
    var species = SPECIES.filter(function(s) {
      return req.params.id.indexOf(s.id.toString()) > -1;
    });
    res.send({
      'species': species[0]
    });
  });

  speciesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/species', speciesRouter);
};
