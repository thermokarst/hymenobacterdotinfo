import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  loading: false,

  actions: {
    authenticate: function() {
      // Manually clean up because there might not be a transition
      this.get('flashMessages').clearMessages();
      let { identification, password } = this.getProperties('identification', 'password');
      this.set('loading', true)
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((error) => {
        this.transitionToRoute('login');
        this.set('loading', false);
        this.get('flashMessages').error(error.error);
      });
      this.set('loading', false);
    }
  }
});
