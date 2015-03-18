module.exports = function(app) {
  var express = require('express');
  var strainsRouter = express.Router();

  var STRAINS = [
    {
      id: 1,
      species: 1,
      strainName: "Strain One",
      strainType: "Test Type",
      etymology: "Test Etymology",
      accessionBanks: "Test Accession",
      genbankEmblDdb: "Test Genbank",
      isolatedFrom: null,
      measurements: [1,2,3,4,5],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
    },
    {
      id: 2,
      species: 2,
      strainName: "Strain Two",
      strainType: "Test Type",
      etymology: "Test Etymology",
      accessionBanks: "Test Accession",
      genbankEmblDdb: "Test Genbank",
      isolatedFrom: null,
      measurements: [6,7,8,9,10],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
    },
    {
      id: 3,
      species: 3,
      strainName: "Strain Three",
      strainType: "Test Type",
      etymology: "Test Etymology",
      accessionBanks: "Test Accession",
      genbankEmblDdb: "Test Genbank",
      isolatedFrom: null,
      measurements: [],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
    },
    {
      id: 4,
      species: 4,
      strainName: "Strain Four",
      strainType: "Test Type",
      etymology: "Test Etymology",
      accessionBanks: "Test Accession",
      genbankEmblDdb: "Test Genbank",
      isolatedFrom: null,
      measurements: [],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
    }
  ];

  strainsRouter.get('/', function(req, res) {
    res.send({
      'strains': STRAINS
    });
  });

  strainsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  strainsRouter.get('/:id', function(req, res) {
    var strains = STRAINS.filter(function(s) {
      return req.params.id.indexOf(s.id.toString()) > -1;
    });
    res.send({
      'strain': strains[0]
    });
  });

  strainsRouter.put('/:id', function(req, res) {
    var strains = STRAINS.filter(function(s) {
      return req.params.id.indexOf(s.id.toString()) > -1;
    });
    res.send({
      'strain': strains[0]
    });
  });

  strainsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/hymenobacter/strains', strainsRouter);
};
