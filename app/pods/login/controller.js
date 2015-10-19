import Ember from 'ember';

export default Ember.Controller.extend({
  loading: false,

  actions: {
    authenticate: function() {
      let credentials = this.getProperties('identification', 'password');
      let session = this.get('session');
      let authenticator = 'simple-auth-authenticator:jwt';

      // Manually clean up because there might not be a transition
      this.get('flashMessages').clearMessages();
      this.set('loading', true).then(session.authenticate(authenticator, credentials).catch((error) => {
        this.transitionToRoute('login');
        this.set('loading', false);
        this.get('flashMessages').error(error.error);
      }));
      this.set('loading', false);
    }
  }
});
