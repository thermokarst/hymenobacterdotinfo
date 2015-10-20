import Ember from 'ember';

export default function ajaxRequest(url, options, session) {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    options = options || {};
    options.url = url;
    session.authorize('authorizer:application', (headerName, headerValue) => {
      let authHeader = {};
      authHeader[headerName] = headerValue;
      options.headers = authHeader;
    });
    options.success = function(data) {
      resolve(data);
    };
    options.error = function(jqXHR, status, error) {
      reject(jqXHR, status, error);
    };
    Ember.$.ajax(options);
  });
}
