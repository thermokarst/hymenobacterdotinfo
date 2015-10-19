// Note: this is here for user lockout authentication
import Ember from 'ember';
import JwtTokenAuthenticator from 'simple-auth-token/authenticators/jwt';

export default JwtTokenAuthenticator.extend({
  authenticate: function(token) {
    return new Ember.RSVP.Promise(resolve => {
      let tokenData = this.getTokenData(token);
      let expiresAt = tokenData[this.tokenExpireName];
      let response  = {};
      response[this.tokenPropertyName] = token;
      response.expiresAt = expiresAt;
      this.scheduleAccessTokenRefresh(expiresAt, token);

      resolve(this.getResponseData(response));
    });
  },

});
