/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hymenobacterdotinfo',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // enable experimental features on an ember canary build
      }
    },
    APP: {
      genus: 'hymenobacter',
    },
    podModulePrefix: 'hymenobacterdotinfo/pods',
    'simple-auth': {
      authorizer: 'simple-auth-authorizer:token',
      store: 'simple-auth-session-store:local-storage',
    },
    'simple-auth-token': {
      identificationField: 'email',
      passwordField: 'password',
      tokenPropertyName: 'token',
      authorizationPrefix: 'Bearer ',
      authorizationHeaderName: 'Authorization',
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'"
    },
    flashMessageDefaults: {
      sticky: true,
      type: 'error',
      types: ['error', 'warning', 'success', 'information', 'tip', 'message'],
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
  }

  if (environment === 'production') {
    apiURL = 'https://bactdb.herokuapp.com';
  }

  ENV['simple-auth']['crossOriginWhitelist'] = [apiURL];
  ENV['simple-auth-token']['serverTokenEndpoint'] = apiURL + '/api/authenticate';
  ENV.apiURL = apiURL;
  ENV.contentSecurityPolicy['connect-src'] = "'self' " + apiURL;

  return ENV;
};
