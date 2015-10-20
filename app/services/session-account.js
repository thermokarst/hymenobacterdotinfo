import Ember from 'ember';
import DS from 'ember-data';
import parseBase64 from '../utils/parse-base64';

const { service } = Ember.inject;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  account: Ember.computed('session.data.authenticated.access_token', function() {
    const token = this.get('session.data.authenticated.access_token');
    const claims = parseBase64(token);
    const id = claims['sub'];

    if (!Ember.isEmpty(id)) {
      return DS.PromiseObject.create({
        promise: this.get('store').findRecord('user', id),
      });
    }
  })
});
