import Ember from 'ember';
import ajaxRequest from '../../../../utils/ajax-request';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  apiURL: function() {
    return this.get('globals.apiURL');
  }.property(),

  genus: function() {
    return this.get('globals.genus');
  }.property(),

  model: function(params) {
    let url = `${this.get('apiURL')}/api/${this.get('genus')}/users/verify/${params.nonce}`;
    return ajaxRequest(url, {}, this.get('session'));
  },


  afterModel: function(model/*, transition*/) {
    this.get('flashMessages').success(model.msg);
    this.transitionTo('login');
  },

  actions: {
    error: function(error/*, transition*/) {
      let err = Ember.$.parseJSON(error.responseText);
      this.get('flashMessages').error(err.error);
      this.transitionTo('login');
    }
  },

});
