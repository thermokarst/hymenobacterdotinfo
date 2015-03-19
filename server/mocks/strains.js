module.exports = function(app) {
  var express = require('express');
  var strainsRouter = express.Router();

  var STRAINS = [
    {
      id: 1,
      speciesName: "Species One",
      strainName: "Strain One",
      strainType: "Test Type",
      etymology: "Test Etymology",
      accessionBanks: "Test Accession",
      genbankEmblDdb: "Test Genbank",
      isolatedFrom: "Location 1",
      measurements: [1,2,3,4,5],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      totalMeasurements: 5,
    },
    {
      id: 2,
      speciesName: "Species Two",
      strainName: "Strain Two",
      strainType: "Test Type",
      etymology: "Test Etymology",
      accessionBanks: "Test Accession",
      genbankEmblDdb: "Test Genbank",
      isolatedFrom: "Location 2",
      measurements: [6,7,8,9,10],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      totalMeasurements: 5,
    },
    {
      id: 3,
      speciesName: "Species Three",
      strainName: "Strain Three",
      strainType: "Test Type",
      etymology: "Test Etymology",
      accessionBanks: "Test Accession",
      genbankEmblDdb: "Test Genbank",
      isolatedFrom: "Location 1",
      measurements: [],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      totalMeasurements: 0,
    },
    {
      id: 4,
      speciesName: "Species Four",
      strainName: "Strain Four",
      strainType: "Test Type",
      etymology: "Test Etymology",
      accessionBanks: "Test Accession",
      genbankEmblDdb: "Test Genbank",
      isolatedFrom: "Location 2",
      measurements: [],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      totalMeasurements: 0,
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
      return s.id == req.params.id;
    });
    res.send({
      'strain': strains[0]
    });
  });

  strainsRouter.put('/:id', function(req, res) {
    var strains = STRAINS.filter(function(s) {
      return s.id == req.params.id;
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
