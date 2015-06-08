import Ember from "ember";
import DS from 'ember-data';
import Session from "simple-auth/session";

// This is pulled straight from ember-cli-simple-auth-token
function getTokenData(token) {
  var tokenData = atob(token.split('.')[1]);
  try {
    return JSON.parse(tokenData);
  } catch (e) {
    return tokenData;
  }
}

var CustomSession = Session.extend({
  currentUser: function() {
    let token = this.get('secure.token');
    if (!Ember.isEmpty(token)) {
      let t = getTokenData(token);
      return DS.PromiseObject.create({
        promise: this.container.lookup('store:main').find('user', t['sub'])
      });
    }
    return null;
  }.property('token')
});

export default {
  name: "custom-session",
  before: "simple-auth",
  initialize: function(container, application) {
    application.register('session:custom', CustomSession);
  }
};
