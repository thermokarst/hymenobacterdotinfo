module.exports = function(app) {
  var express = require('express');
  var characteristicTypesRouter = express.Router();

  var CHARACTERISTIC_TYPES = [
    {
      id: 1,
      characteristicTypeName: 'Type 1',
      characteristics: [1,4],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      createdBy: 1,
      updatedBy: 1,
      deletedBy: null,
      sortOrder: 1,
    },
    {
      id: 2,
      characteristicTypeName: 'Type 2',
      characteristics: [2,5],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      createdBy: 1,
      updatedBy: 1,
      deletedBy: null,
      sortOrder: 2,
    },
    {
      id: 3,
      characteristicTypeName: 'Type 3',
      characteristics: [3],
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      deletedAt: null,
      createdBy: 1,
      updatedBy: 1,
      deletedBy: null,
      sortOrder: 3,
    },
  ]

  characteristicTypesRouter.get('/', function(req, res) {
    var characteristics;
    if (req.query.ids) {
      characteristic_types = CHARACTERISTIC_TYPES.filter(function(c) {
        return req.query.ids.indexOf(c.id.toString()) > -1;
      });
    } else {
      characteristic_types = CHARACTERISTIC_TYPES;
    }
    res.send({
      'characteristicTypes': characteristic_types
    });
  });

  characteristicTypesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  characteristicTypesRouter.get('/:id', function(req, res) {
    var characteristic_type = CHARACTERISTIC_TYPES.filter(function(c) {
      return c.id == req.params.id;
    });
    res.send({
      'characteristicType': characteristic_type
    });
  });

  characteristicTypesRouter.put('/:id', function(req, res) {
    res.send({
      'characteristicTypes': {
        id: req.params.id
      }
    });
  });

  characteristicTypesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/hymenobacter/characteristicTypes', characteristicTypesRouter);
};
