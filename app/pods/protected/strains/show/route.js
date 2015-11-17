import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model: function(params) {
    return this.store.findRecord('strain', params.strain_id, { reload: true });
  },

});
