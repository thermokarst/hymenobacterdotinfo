module.exports = function(app) {
  var express = require('express');
  var speciesRouter = express.Router();

  var SPECIES = [
    {
      id: 1,
      genusName: "Clostridium",
      speciesName: "One",
      typeSpecies: true,
      etymology: "Test Etymology",
      strains: [1,2],
      totalStrains: 1,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      createdBy: 1,
      updatedBy: 1,
      deletedBy: null,
    },
    {
      id: 2,
      genusName: "Clostridium",
      speciesName: "Two",
      typeSpecies: true,
      etymology: "Test Etymology",
      strains: [3],
      totalStrains: 1,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      createdBy: 1,
      updatedBy: 1,
      deletedBy: null,
    },
    {
      id: 3,
      genusName: "Clostridium",
      speciesName: "Three",
      typeSpecies: true,
      etymology: "Test Etymology",
      strains: [4],
      totalStrains: 1,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      createdBy: 1,
      updatedBy: 1,
      deletedBy: null,
    },
    {
      id: 4,
      genusName: "Clostridium",
      speciesName: "Four",
      typeSpecies: true,
      etymology: "Test Etymology",
      strains: [4],
      totalStrains: 1,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      createdBy: 1,
      updatedBy: 1,
      deletedBy: null,
    }
  ];

  speciesRouter.get('/', function(req, res) {
    var species;
    if (req.query.ids) {
      species = SPECIES.filter(function(s) {
        return req.query.ids.indexOf(s.id.toString()) > -1;
      });
    } else {
      species = SPECIES;
    }
    res.send({
      'species': species
    });
  });

  speciesRouter.post('/', function(req, res) {
    req.body.species.id = Math.max.apply(Math, SPECIES.map(function(o){return o.id;})) + 1;
    res.status(201).send(req.body);
  });

  speciesRouter.get('/:id', function(req, res) {
    var species = SPECIES.filter(function(s) {
      return s.id == req.params.id;
    });
    res.send({
      'species': species[0]
    });
  });

  speciesRouter.put('/:id', function(req, res) {
    res.send(req.body);
  });

  speciesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/clostridium/species', speciesRouter);
};
