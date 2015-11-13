import Ember from 'ember';
import DS from 'ember-data';
import parseBase64 from '../utils/parse-base64';

const { Service, computed, isEmpty, inject: { service } } = Ember;
const { PromiseObject } = DS;

export default Service.extend({
  session: service('session'),
  store: service(),

  account: computed('session.data.authenticated.access_token', function() {
    const token = this.get('session.data.authenticated.access_token');
    const claims = parseBase64(token);
    const id = claims['sub'];

    if (!isEmpty(id)) {
      return PromiseObject.create({
        promise: this.get('store').findRecord('user', id),
      });
    }
  })
});
