import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      let credentials = this.getProperties('identification', 'password');
      let authenticator = 'simple-auth-authenticator:token';

      this.set('loading', true);
      // Manually clean up because there might not be a transition
      this.get('flashMessages').clearMessages();
      this.get('session').authenticate(authenticator, credentials).then(()=>{
        this.set('loading', false);
      }, (error)=> {
        this.set('loading', false);
        this.get('flashMessages').error(error.error);
      });
    }
  }
});
