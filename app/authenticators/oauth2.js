import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from '../config/environment';
import parseBase64 from '../utils/parse-base64';
import Ember from 'ember';
const { RSVP: { Promise }, isEmpty, run, Logger: { warn } } = Ember;

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${config.apiURL}/api/authenticate`,
  serverTokenRefreshEndpoint: `${config.apiURL}/api/refresh`,

  authenticate: function(identification, password) {
    return new Promise((resolve, reject) => {
      const data = { username: identification, password };
      const serverTokenEndpoint = this.get('serverTokenEndpoint');
      this.makeRequest(serverTokenEndpoint, data).then((response) => {
        run(() => {
          const token = parseBase64(response['access_token']);
          const expiresAt = this._absolutizeExpirationTime(token['exp']);
          this._scheduleAccessTokenRefresh(expiresAt, response['access_token']);
          if (!isEmpty(expiresAt)) {
            response = Ember.merge(response, { 'expires_at': expiresAt });
          }
          resolve(response);
        });
      }, (xhr) => {
        run(null, reject, xhr.responseJSON || xhr.responseText);
      });
    });
  },

  _scheduleAccessTokenRefresh: function(expiresAt, accessToken) {
    if (this.get('refreshAccessTokens')) {
      const now = (new Date()).getTime();
      const offset = (Math.floor(Math.random() * 5) + 5) * 1000;
      if (!isEmpty(accessToken) && !isEmpty(expiresAt) && expiresAt > now - offset) {
        run.cancel(this._refreshTokenTimeout);
        delete this._refreshTokenTimeout;
        if (!Ember.testing) {
          this._refreshTokenTimeout = run.later(this, this._refreshAccessToken, expiresAt, accessToken, expiresAt - now - offset);
        }
      }
    }
  },

  _refreshAccessToken: function(expiresAt, accessToken) {
    const data = { 'token': accessToken };
    const serverTokenRefreshEndpoint = this.get('serverTokenRefreshEndpoint');
    return new Promise((resolve, reject) => {
      this.makeRequest(serverTokenRefreshEndpoint, data).then((response) => {
        run(() => {
          const token = parseBase64(response['access_token']);
          const expiresAt = this._absolutizeExpirationTime(token['exp']);
          const data = Ember.merge(response, { 'expires_at': expiresAt });
          this._scheduleAccessTokenRefresh(expiresAt, response['access_token']);
          this.trigger('sessionDataUpdated', data);
          resolve(data);
        });
      }, (xhr, status, error) => {
        warn(`Access token could not be refreshed - server responded with ${error}.`);
        reject();
      });
    });
  },

  _absolutizeExpirationTime: function(expiresAt) {
    if (!isEmpty(expiresAt)) {
      return new Date(expiresAt * 1000).getTime();
    }
  }
});
