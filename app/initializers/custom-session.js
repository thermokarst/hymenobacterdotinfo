// from: http://blog.willrax.com/fetching-the-current-user-with-simple-auth/
import Ember from "ember";
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

export default {
  name: "custom-session",
  before: "simple-auth",
  initialize: function(container) {
    Session.reopen({
      setCurrentUser: function() {
        var token = this.get("token");
        var self = this;

        if (!Ember.isEmpty(token)) {
          var t = getTokenData(token);
          return container.lookup("store:main").find("user", t['sub']).then(function(user) {
            self.set("currentUser", user);
          });
        }
      }.observes("token")
    });
  }
};
