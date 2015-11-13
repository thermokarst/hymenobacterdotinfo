import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  session: service(),
  ajax: service(),

  model: function(params) {
    return this.get('ajax').request(`/users/verify/${params.nonce}`);
  },

  afterModel: function(model/*, transition*/) {
    this.get('flashMessages').success(model.msg);
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
