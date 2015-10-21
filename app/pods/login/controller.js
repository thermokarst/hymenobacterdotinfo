import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate: function() {
      // Manually clean up because there might not be a transition
      this.get('flashMessages').clearMessages();

      let { identification, password } = this.getProperties('identification', 'password');
      this.transitionToRoute('loading').then(() => {
        this.get('session').authenticate('authenticator:oauth2', identification, password).catch((error) => {
          this.transitionToRoute('login').then(() => {
            this.get('flashMessages').error(error.error);
          });
        });
      });
    }
  }
});
