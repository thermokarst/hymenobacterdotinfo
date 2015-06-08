import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      this.set('errorMessage', null);
      let credentials = this.getProperties('identification', 'password');
      let authenticator = 'simple-auth-authenticator:token';

      this.set('loading', true);
      this.get('session').authenticate(authenticator, credentials).then(()=>{
        this.set('loading', false);
      }, (error)=> {
        this.set('loading', false);
        this.set('errorMessage', error.error);
      });
    }
  }
});
