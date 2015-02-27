/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/flakes/css/all.css');
app.import('bower_components/nprogress/nprogress.css');
app.import('bower_components/nprogress/nprogress.js');

module.exports = app.toTree();
