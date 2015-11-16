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
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self'",
      'img-src': "'self' data:",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'"
    }
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
    ENV.baseURL = '/';
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    apiURL = 'https://bactdb-test.herokuapp.com';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
  }

  if (environment === 'production') {
    apiURL = 'https://bactdb.herokuapp.com';
  }

  ENV.apiURL = apiURL;
  ENV.contentSecurityPolicy['connect-src'] = `'self' ${apiURL}`;

  return ENV;
};
