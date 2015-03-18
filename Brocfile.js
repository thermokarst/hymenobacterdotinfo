/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// STYLES //////////////////////////////////////////////////////////////////////
// flakes (and deps)
app.import('bower_components/flakes/css/all.css');
app.import('bower_components/gridforms/gridforms/gridforms.css');
// nprogress
app.import('bower_components/nprogress/nprogress.css');

// LIBS ////////////////////////////////////////////////////////////////////////
// flakes (and deps)
app.import('bower_components/snapjs/snap.js');
app.import('bower_components/responsive-elements/responsive-elements.js');
app.import('bower_components/gridforms/gridforms/gridforms.js');
app.import('bower_components/flakes/js/base.js');
// nprogress
app.import('bower_components/nprogress/nprogress.js');

module.exports = app.toTree();
