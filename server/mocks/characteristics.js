module.exports = function(app) {
  var express = require('express');
  var characteristicsRouter = express.Router();

  var CHARACTERISTICS = [
    {
      id: 1,
      characteristicName: 'α-fucosidase (API ZYM)',
      characteristicType: 'Type 1',
      strains: [1],
      measurements: [1],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      createdBy: 1,
      updatedBy: 1,
      deletedBy: null
    },
    {
      id: 2,
      characteristicName: 'α-glucosidase',
      characteristicType: 'Type 2',
      strains: [1],
      measurements: [2],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      createdBy: 1,
      updatedBy: 1,
      deletedBy: null
    },
    {
      id: 3,
      characteristicName: 'Chloramphenicol',
      characteristicType: 'Type 3',
      strains: [1],
      measurements: [3],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      createdBy: 1,
      updatedBy: 1,
      deletedBy: null
    }
  ]

  characteristicsRouter.get('/', function(req, res) {
    var characteristics;
    if (req.query.ids) {
      characteristics = CHARACTERISTICS.filter(function(c) {
        return req.query.ids.indexOf(c.id.toString()) > -1;
      });
    } else {
      characteristics = CHARACTERISTICS;
    }
    res.send({
      'characteristics': characteristics
    });
  });

  characteristicsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  characteristicsRouter.get('/:id', function(req, res) {
    var characteristic = CHARACTERISTICS.filter(function(c) {
      return c.id == req.params.id;
    });
    res.send({
      'characteristic': characteristic
    });
  });

  characteristicsRouter.put('/:id', function(req, res) {
    res.send({
      'characteristics': {
        id: req.params.id
      }
    });
  });

  characteristicsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/hymenobacter/characteristics', characteristicsRouter);
};
