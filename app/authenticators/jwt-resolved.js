// Note: this authenticator exists for user lockout --- they are sent a copy
// of a valid JWT to their registered email address. The lockout route plucks
// the token off the URL and passes it directly into this authenticator.

import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import Ember from 'ember';

const { RSVP, isEmpty } = Ember;

export default BaseAuthenticator.extend({
  authenticate: function(token) {
    return new RSVP.Promise((resolve, reject) => {
      if (isEmpty(token)) {
        reject();
      } else {
        // For now assume that the token we have received is actually valid.
        resolve({'access_token': token});
      }
    });
  },

  restore: function(data) {
    return RSVP.resolve(data);
  },

  invalidate: function(/* data */) {
    return RSVP.resolve();
  },
});
