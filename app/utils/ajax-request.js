import Ember from 'ember';

export default function ajaxRequest(url, options) {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    options = options || {};
    options.url = url;
    options.success = function(data) {
      resolve(data);
    };
    options.error = function(jqXHR, status, error) {
      reject(jqXHR, status, error);
    };
    Ember.$.ajax(options);
  });
}
