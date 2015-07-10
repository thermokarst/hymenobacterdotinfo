import Ember from 'ember';
import parseBase64 from '../../utils/parse-base64';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      let credentials = this.getProperties('identification', 'password');
      let session = this.get('session');
      let authenticator = 'simple-auth-authenticator:token';

      this.set('loading', true);
      // Manually clean up because there might not be a transition
      this.get('flashMessages').clearMessages();
      session.authenticate(authenticator, credentials).then(null, (error)=> {
        this.set('loading', false);
        this.get('flashMessages').error(error.error);
      });
    }
  }
});
