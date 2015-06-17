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
  };

  if (environment === 'development') {
    ENV['simple-auth']['crossOriginWhitelist'] = ['http://127.0.0.1:4200'];
    ENV['simple-auth-token']['serverTokenEndpoint'] = '/api/authenticate';
    ENV.apiURL = 'http://127.0.0.1:4200';
    ENV.contentSecurityPolicy['connect-src'] = "'self' http://127.0.0.1:4200";
  }

  if (environment === 'test') {
    ENV['simple-auth']['crossOriginWhitelist'] = ['https://bactdb-test.herokuapp.com'];
    ENV['simple-auth-token']['serverTokenEndpoint'] = 'https://bactdb-test.herokuapp.com/api/authenticate';
    ENV.apiURL = 'https://bactdb-test.herokuapp.com';
    ENV.contentSecurityPolicy['connect-src'] = "'self' https://bactdb-test.herokuapp.com";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
  }

  if (environment === 'production') {
    ENV['simple-auth']['crossOriginWhitelist'] = ['https://bactdb.herokuapp.com'];
    ENV['simple-auth-token']['serverTokenEndpoint'] = 'https://bactdb.herokuapp.com/api/authenticate';
    ENV.apiURL = 'https://bactdb.herokuapp.com';
    ENV.contentSecurityPolicy['connect-src'] = "'self' https://bactdb.herokuapp.com";
  }

  return ENV;
};
