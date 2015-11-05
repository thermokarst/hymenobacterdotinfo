/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'clostridiumdotinfo',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // enable experimental features on an ember canary build
      }
    },
    APP: {
      genus: 'clostridium',
    },
    podModulePrefix: 'clostridiumdotinfo/pods',
    flashMessageDefaults: {
      sticky: true,
      type: 'error',
      types: ['error', 'warning', 'success', 'information', 'tip', 'message'],
    },
    'ember-simple-auth': {
      routeAfterAuthentication: 'protected.compare',
      routeIfAlreadyAuthenticated: 'protected.compare',
    },
  };

  var apiURL;

  if (environment === 'development') {
    apiURL = 'http://127.0.0.1:8901';
  }

  if (environment === 'test') {
    apiURL = 'https://bactdb-test.herokuapp.com';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.locationType = 'none';
  }

  if (environment === 'production') {
    apiURL = 'https://bactdb.herokuapp.com';
  }

  ENV.apiURL = apiURL;

  return ENV;
};
