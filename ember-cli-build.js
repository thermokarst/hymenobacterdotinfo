/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // STYLES //////////////////////////////////////////////////////////////////////
  // flakes (and deps)
  app.import('bower_components/flakes/css/all.css');
  app.import('bower_components/gridforms/gridforms/gridforms.css');

  // LIBS ////////////////////////////////////////////////////////////////////////
  // flakes (and deps)
  app.import('bower_components/snapjs/snap.js');
  app.import('bower_components/responsive-elements/responsive-elements.js');
  app.import('bower_components/gridforms/gridforms/gridforms.js');
  app.import('bower_components/flakes/js/base.js');
  // moment
  app.import('bower_components/moment/moment.js');

  return app.toTree();
};
