import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'authenticators:custom',
  actions: {
    authenticate: function() {
      var _this = this;
      this._super().then(null, function(message) {
        _this.set('errorMessage', message);
      });
    }
  }
});
