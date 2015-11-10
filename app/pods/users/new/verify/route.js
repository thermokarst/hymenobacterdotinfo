import Ember from 'ember';
import ajaxRequest from '../../../../utils/ajax-request';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),
  globals: service(),

  model: function(params) {
    const url = `${this.get('globals.apiURL')}/api/${this.get('globals.genus')}/users/verify/${params.nonce}`;
    return ajaxRequest(url, {}, this.get('session'));
  },


  afterModel: function(model/*, transition*/) {
    this.get('flashMessages').success(model.get('msg'));
    this.transitionTo('login');
  },

  actions: {
    error: function(error/*, transition*/) {
      const err = Ember.$.parseJSON(error.responseText);
      this.get('flashMessages').error(err.error);
      this.transitionTo('login');
    }
  },

});
