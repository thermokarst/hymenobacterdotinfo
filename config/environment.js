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
    'simple-auth': {
      session: 'session:custom',
      authorizer: 'simple-auth-authorizer:token',
      store: 'simple-auth-session-store:local-storage',
      routeAfterAuthentication: 'protected.index',
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
      'img-src': "'self' data:",
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
