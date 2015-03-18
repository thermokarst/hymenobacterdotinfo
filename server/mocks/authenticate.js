module.exports = function(app) {
  var express = require('express');
  var authenticateRouter = express.Router();

  authenticateRouter.post('/', function(req, res) {
    res.send({
      'token': 'abc123'
    });
  });

  app.use('/api/authenticate', authenticateRouter);
};
