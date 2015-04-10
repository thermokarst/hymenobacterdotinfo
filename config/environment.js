/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hymenobacterdotinfo',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    genus: 'hymenobacter',
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:token',
      crossOriginWhitelist: ['http://127.0.0.1:4200']
    }
    ENV['simple-auth-token'] = {
      serverTokenEndpoint: '/api/authenticate',
      identificationField: 'email',
      passwordField: 'password',
      tokenPropertyName: 'token',
      authorizationPrefix: 'Bearer ',
      authorizationHeaderName: 'Authorization',
      refreshAccessTokens: true,
      serverTokenRefreshEndpoint: '/api/authenticate',
      tokenExpireName: 'exp',
      refreshLeeway: 300,
      timeFactor: 1
    }
    ENV.apiURL = 'http://127.0.0.1:4200';
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' http://127.0.0.1:4200",
      'img-src': "'self'",
      'style-src': "'self'",
      'media-src': "'self'"
    }
  }

  if (environment === 'test') {
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:token',
      crossOriginWhitelist: ['https://bactdb-test.herokuapp.com']
    }
    ENV['simple-auth-token'] = {
      serverTokenEndpoint: 'https://bactdb-test.herokuapp.com/api/authenticate',
      identificationField: 'email',
      passwordField: 'password',
      tokenPropertyName: 'token',
      authorizationPrefix: 'Bearer ',
      authorizationHeaderName: 'Authorization',
      refreshAccessTokens: true,
      serverTokenRefreshEndpoint: 'https://bactdb-test.herokuapp.com/api/authenticate',
      tokenExpireName: 'exp',
      refreshLeeway: 300,
      timeFactor: 1
    }
    ENV.apiURL = 'https://bactdb-test.herokuapp.com';
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' https://bactdb-test.herokuapp.com",
      'img-src': "'self'",
      'style-src': "'self'",
      'media-src': "'self'"
    }

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
  }

  if (environment === 'production') {
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:token',
      crossOriginWhitelist: ['https://bactdb.herokuapp.com']
    }
    ENV['simple-auth-token'] = {
      serverTokenEndpoint: 'https://bactdb.herokuapp.com/api/authenticate',
      identificationField: 'email',
      passwordField: 'password',
      tokenPropertyName: 'token',
      authorizationPrefix: 'Bearer ',
      authorizationHeaderName: 'Authorization',
      refreshAccessTokens: true,
      serverTokenRefreshEndpoint: 'https://bactdb.herokuapp.com/api/authenticate',
      tokenExpireName: 'exp',
      refreshLeeway: 300,
      timeFactor: 1
    }
    ENV.apiURL = 'https://bactdb.herokuapp.com';
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' https://bactdb.herokuapp.com",
      'img-src': "'self'",
      'style-src': "'self'",
      'media-src': "'self'"
    }
  }

  return ENV;
};
