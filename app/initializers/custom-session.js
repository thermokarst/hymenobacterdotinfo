import Session from 'simple-auth/session';
import parseBase64 from '../utils/parse-base64';
import Ember from 'ember';

var CustomSession = Session.extend({
  currentUser: function() {
    let token = this.get('secure.token');
    if (!Ember.isEmpty(token)) {
      let t = parseBase64(token);
      return this.container.lookup('store:main').find('user', t['sub']);
    }
    return null;
  }.property('secure.token'),

});

export function initialize(container, application) {
  application.register('session:custom', CustomSession);
}

export default {
  name: 'custom-session',
  before: 'simple-auth',
  initialize: initialize
};
