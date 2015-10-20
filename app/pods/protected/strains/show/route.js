import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('strain', params.strain_id, { reload: true });
  },

});
