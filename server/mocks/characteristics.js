module.exports = function(app) {
  var express = require('express');
  var characteristicsRouter = express.Router();

  var CHARACTERISTICS = [
    {
      id: 1,
      characteristicName: "Char01",
      characteristicTypeId: 1,
      createdAt: "2015-01-27T10:19:25.156836Z",
      updatedAt: "2015-01-27T10:19:25.156836Z",
      deletedAt: null,
      measurements: [1,6]
    },
    {
      id: 2,
      characteristicName: "Char02",
      characteristicTypeId: 1,
      createdAt: "2015-01-27T10:19:25.156836Z",
      updatedAt: "2015-01-27T10:19:25.156836Z",
      deletedAt: null,
      measurements: [2,7]
    },
    {
      id: 3,
      characteristicName: "Char03",
      characteristicTypeId: 1,
      createdAt: "2015-01-27T10:19:25.156836Z",
      updatedAt: "2015-01-27T10:19:25.156836Z",
      deletedAt: null,
      measurements: [3,8]
    },
    {
      id: 4,
      characteristicName: "Char04",
      characteristicTypeId: 1,
      createdAt: "2015-01-27T10:19:25.156836Z",
      updatedAt: "2015-01-27T10:19:25.156836Z",
      deletedAt: null,
      measurements: [4,5,9,10]
    }
  ]

  characteristicsRouter.get('/', function(req, res) {
    res.send({
      'characteristics': CHARACTERISTICS
    });
  });

  characteristicsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  characteristicsRouter.get('/:id', function(req, res) {
    var characteristics = CHARACTERISTICS.filter(function(c) {
      return req.params.id.indexOf(c.id.toString()) > -1;
    });
    res.send({
      'characteristic': characteristics[0]
    });
  });

  characteristicsRouter.put('/:id', function(req, res) {
    var characteristics = CHARACTERISTICS.filter(function(c) {
      return req.params.id.indexOf(c.id.toString()) > -1;
    });
    res.send({
      'characteristic': characteristics[0]
    });
  });

  characteristicsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/characteristics', characteristicsRouter);
};
