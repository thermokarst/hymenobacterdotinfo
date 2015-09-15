import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      let credentials = this.getProperties('identification', 'password');
      let session = this.get('session');
      let authenticator = 'simple-auth-authenticator:token';

      // Manually clean up because there might not be a transition
      this.get('flashMessages').clearMessages();
      this.transitionToRoute('loading').then(() => {
        session.authenticate(authenticator, credentials).then(null, (error)=> {
          this.transitionToRoute('login');
          this.get('flashMessages').error(error.error);
        });
      });
    }
  }
});
