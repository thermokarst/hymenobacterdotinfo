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
      session.authenticate(authenticator, credentials).then(()=>{
        this.set('loading', false);
        let t = parseBase64(session.get('secure.token'));
        this.store.find('user', t['sub']).then((user) => {
          session.set('currentUser', user);
        });
      }, (error)=> {
        this.set('loading', false);
        this.get('flashMessages').error(error.error);
      });
    }
  }
});
