module.exports = function(app) {
  var express = require('express');
  var strainsRouter = express.Router();

  var STRAINS = [
    {
      id: 1,
      speciesName: "Species One",
      strainName: "ABC",
      typeStrain: true,
      accessionNumbers: "Test Accession",
      genbank: "Test Genbank",
      isolatedFrom: "Location 1",
      measurements: [1,2,3,4,5],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      author: 1,
      totalMeasurements: 5,
      notes: "Test notes",
    },
    {
      id: 2,
      speciesName: "Species Two",
      strainName: "XYZ",
      typeStrain: false,
      accessionNumbers: "Test Accession",
      genbank: "Test Genbank",
      isolatedFrom: "Location 2",
      measurements: [6,7,8,9,10],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      author: 3,
      totalMeasurements: 5,
      notes: "Test notes",
    },
    {
      id: 3,
      speciesName: "Species Three",
      strainName: "QRS",
      typeStrain: true,
      accessionNumbers: "Test Accession",
      genbank: "Test Genbank",
      isolatedFrom: "Location 1",
      measurements: [],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      author: 1,
      totalMeasurements: 0,
      notes: "Test notes",
    },
    {
      id: 4,
      speciesName: "Species Four",
      strainName: "LMN",
      typeStrain: true,
      accessionNumbers: "Test Accession",
      genbank: "Test Genbank",
      isolatedFrom: "Location 2",
      measurements: [],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      author: 3,
      totalMeasurements: 0,
      notes: "Test notes",
    }
  ];

  strainsRouter.get('/', function(req, res) {
    var strains;
    if (req.query.ids) {
      strains = STRAINS.filter(function(s) {
        return req.query.ids.indexOf(s.id.toString()) > -1;
      });
    } else {
      strains = STRAINS;
    }
    res.send({
      'strains': strains
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
    if (strains.length === 0) {
      res.status(422).send({
        'errors':{
          "strainName": ["error1"],
          "typeStrain": ["error2", "error3"],
          "isolatedFrom": ["error4"]
        }
      }).end();
    } else {
      res.status(204).end();
    }
  });

  strainsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/hymenobacter/strains', strainsRouter);
};
