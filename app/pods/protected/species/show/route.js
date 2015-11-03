import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model: function(params) {
    return this.store.findRecord('species', params.species_id);
  },

});
