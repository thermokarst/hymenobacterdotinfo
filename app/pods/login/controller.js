import Ember from 'ember';

const { Controller, inject: { service } } = Ember;

export default Controller.extend({
  session: service(),

  actions: {
    authenticate: function(identification, password) {
      // Manually clean up because there might not be a transition
      this.get('flashMessages').clearMessages();

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
