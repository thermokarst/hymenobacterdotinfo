import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('species', params.species_id, { reload: true });
  },

});
