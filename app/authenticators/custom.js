import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({
  tokenEndpoint: config.apiURL + '/api/authenticate',

  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate: function(credentials) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: _this.tokenEndpoint,
        type: 'POST',
        data: {username: credentials.identification, password: credentials.password},
        contentType: 'application/x-www-form-urlencoded'
      }).then(function(response) {
        Ember.run(function() {
          resolve({ token: response.token });
        });
      }, function(xhr, status, error) {
        var response = JSON.parse(xhr.responseText);
        Ember.run(function() {
          reject(response.error);
        });
      });
    });
  },

  invalidate: function(data) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.ajax({ url: _this.tokenEndpoint, type: 'DELETE' }).always(function() {
        resolve();
      });
    });
  },

});
