import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('characteristic', params.characteristic_id, { reload: true });
  },

});
