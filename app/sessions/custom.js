import Session from 'simple-auth/session';
import parseBase64 from '../utils/parse-base64';

export default Session.extend({
  currentUser: function() {
    let token = this.get('secure.token');
    if (token && this.get('isAuthenticated')) {
      let t = parseBase64(token);
      return this._store.findRecord('user', t['sub']);
    }
  }.property('secure.token', 'isAuthenticated')
});
