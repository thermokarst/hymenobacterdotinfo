module.exports = function(app) {
  var express = require('express');
  var measurementsRouter = express.Router();

  var MEASUREMENTS = [
    {
      id: 1,
      strain: 1,
      characteristic: 'α-fucosidase (API ZYM)',
      textMeasurementType: 'Meas. Type 1',
      txtValue: null,
      numValue: null,
      confidenceInterval: null,
      unitType: null,
      notes: null,
      testMethod: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      createdBy: 1,
      updatedBy: 1
    },
    {
      id: 2,
      strain: 1,
      characteristic: 'α-glucosidase',
      textMeasurementType: 'Meas. Type 1',
      txtValue: null,
      numValue: null,
      confidenceInterval: null,
      unitType: null,
      notes: null,
      testMethod: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      createdBy: 1,
      updatedBy: 1
    },
    {
      id: 3,
      strain: 1,
      characteristic: 'Chloramphenicol',
      textMeasurementType: null,
      txtValue: "text value",
      numValue: null,
      confidenceInterval: null,
      unitType: null,
      notes: "some notes",
      testMethod: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      createdBy: 1,
      updatedBy: 1
    },
    {
      id: 4,
      strain: 1,
      characteristic: 'Bacitracin',
      textMeasurementType: null,
      txtValue: null,
      numValue: 123.4,
      confidenceInterval: null,
      unitType: 'Unit 1',
      notes: null,
      testMethod: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      createdBy: 1,
      updatedBy: 1
    },
    {
      id: 5,
      strain: 1,
      characteristic: 'Indole',
      textMeasurementType: null,
      txtValue: null,
      numValue: 567.8,
      confidenceInterval: 0.2,
      unitType: 'Unit 1',
      notes: null,
      testMethod: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      createdBy: 1,
      updatedBy: 1
    },
    {
      id: 6,
      strain: 2,
      characteristic: 'Characteristic 1',
      textMeasurementType: 'Meas. Type 1',
      txtValue: null,
      numValue: null,
      confidenceInterval: null,
      unitType: null,
      notes: null,
      testMethod: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      createdBy: 1,
      updatedBy: 1
    },
    {
      id: 7,
      strain: 2,
      characteristic: 'Characteristic 2',
      textMeasurementType: 'Meas. Type 1',
      txtValue: null,
      numValue: null,
      confidenceInterval: null,
      unitType: null,
      notes: null,
      testMethod: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      createdBy: 1,
      updatedBy: 1
    },
    {
      id: 8,
      strain: 2,
      characteristic: 'Characteristic 3',
      textMeasurementType: null,
      txtValue: "text value",
      numValue: null,
      confidenceInterval: null,
      unitType: null,
      notes: "some notes",
      testMethod: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      createdBy: 1,
      updatedBy: 1
    },
    {
      id: 9,
      strain: 2,
      characteristic: 'Characteristic 4',
      textMeasurementType: null,
      txtValue: null,
      numValue: 123.4,
      confidenceInterval: null,
      unitType: 'Unit 1',
      notes: null,
      testMethod: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      createdBy: 1,
      updatedBy: 1
    },
    {
      id: 10,
      strain: 2,
      characteristic: 'Characteristic 4',
      textMeasurementType: null,
      txtValue: null,
      numValue: 567.8,
      confidenceInterval: 0.2,
      unitType: 'Unit 1',
      notes: null,
      testMethod: null,
      createdAt: "0001-01-01T00:00:00Z",
      updatedAt: "0001-01-01T00:00:00Z",
      createdBy: 1,
      updatedBy: 1
    }
  ]

  measurementsRouter.get('/', function(req, res) {
    var measurements;
    if (req.query.ids) {
      measurements = MEASUREMENTS.filter(function(m) {
        return req.query.ids.indexOf(m.id.toString()) > -1;
      });
    } else {
      measurements = MEASUREMENTS;
    }
    res.send({
      'measurements': measurements
    });
  });

  measurementsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  measurementsRouter.get('/:id', function(req, res) {
    var measurements = MEASUREMENTS.filter(function(m) {
      return m.id == req.params.id;
    });
    res.send({
      'measurement': measurements
    });
  });

  measurementsRouter.put('/:id', function(req, res) {
    var measurements = MEASUREMENTS.filter(function(m) {
      return m.id == req.params.id;
    });
    res.send({
      'measurement': measurements[0]
    });
  });

  measurementsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/hymenobacter/measurements', measurementsRouter);
};
