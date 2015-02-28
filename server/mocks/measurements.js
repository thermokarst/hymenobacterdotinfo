module.exports = function(app) {
  var express = require('express');
  var measurementsRouter = express.Router();

  var MEASUREMENTS = [
    {
      id: 1,
      strain: 1,
      characteristic: 1,
      textMeasurementTypeId: 1,
      txtValue: null,
      numValue: null,
      confidenceInterval: null,
      unitTypeId: null,
      notes: null,
      testMethodId: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z"
    },
    {
      id: 2,
      strain: 1,
      characteristic: 2,
      textMeasurementTypeId: 1,
      txtValue: null,
      numValue: null,
      confidenceInterval: null,
      unitTypeId: null,
      notes: null,
      testMethodId: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z"
    },
    {
      id: 3,
      strain: 1,
      characteristic: 3,
      textMeasurementTypeId: null,
      txtValue: "text value",
      numValue: null,
      confidenceInterval: null,
      unitTypeId: null,
      notes: "some notes",
      testMethodId: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z"
    },
    {
      id: 4,
      strain: 1,
      characteristic: 4,
      textMeasurementTypeId: null,
      txtValue: null,
      numValue: 123.4,
      confidenceInterval: null,
      unitTypeId: 1,
      notes: null,
      testMethodId: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z"
    },
    {
      id: 5,
      strain: 1,
      characteristic: 4,
      textMeasurementTypeId: null,
      txtValue: null,
      numValue: 567.8,
      confidenceInterval: 0.2,
      unitTypeId: 1,
      notes: null,
      testMethodId: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z"
    },
    {
      id: 6,
      strain: 2,
      characteristic: 1,
      textMeasurementTypeId: 1,
      txtValue: null,
      numValue: null,
      confidenceInterval: null,
      unitTypeId: null,
      notes: null,
      testMethodId: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z"
    },
    {
      id: 7,
      strain: 2,
      characteristic: 2,
      textMeasurementTypeId: 1,
      txtValue: null,
      numValue: null,
      confidenceInterval: null,
      unitTypeId: null,
      notes: null,
      testMethodId: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z"
    },
    {
      id: 8,
      strain: 2,
      characteristic: 3,
      textMeasurementTypeId: null,
      txtValue: "text value",
      numValue: null,
      confidenceInterval: null,
      unitTypeId: null,
      notes: "some notes",
      testMethodId: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z"
    },
    {
      id: 9,
      strain: 2,
      characteristic: 4,
      textMeasurementTypeId: null,
      txtValue: null,
      numValue: 123.4,
      confidenceInterval: null,
      unitTypeId: 1,
      notes: null,
      testMethodId: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z"
    },
    {
      id: 10,
      strain: 2,
      characteristic: 4,
      textMeasurementTypeId: null,
      txtValue: null,
      numValue: 567.8,
      confidenceInterval: 0.2,
      unitTypeId: 1,
      notes: null,
      testMethodId: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z"
    }
  ]

  measurementsRouter.get('/', function(req, res) {
    res.send({
      'measurements': MEASUREMENTS
    });
  });

  measurementsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  measurementsRouter.get('/:id', function(req, res) {
    var measurements = MEASUREMENTS.filter(function(m) {
      return req.params.id.indexOf(m.id.toString()) > -1;
    });
    res.send({
      'measurement': measurements[0]
    });
  });

  measurementsRouter.put('/:id', function(req, res) {
    var measurements = MEASUREMENTS.filter(function(m) {
      return req.params.id.indexOf(m.id.toString()) > -1;
    });
    res.send({
      'measurement': measurements[0]
    });
  });

  measurementsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/measurements', measurementsRouter);
};
