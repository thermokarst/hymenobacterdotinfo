import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:jwt',
  loading: false,
  actions: {
    authenticate: function() {
      this.set('errorMessage', null);
      var _this = this;
      this.set('loading', true);
      this._super().then(function() {
        _this.set('loading', false);
      }, function(error) {
        _this.set('loading', false);
        var message = error.error;
        _this.set('errorMessage', message);
      });
    }
  }
});
