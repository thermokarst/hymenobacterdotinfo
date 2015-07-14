import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let compare = this.controllerFor('protected.compare');
    compare.set('selectedStrains', params.strain_ids);
    compare.set('selectedCharacteristics', params.characteristic_ids);
    return this.store.query('measurement', params);
  },

});
