import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    strain_ids: {
      refreshModel: true,
    },
    characteristic_ids: {
      refreshModel: true,
    },
  },

  beforeModel: function(transition) {
    this._super(transition);
    if (Ember.$.isEmptyObject(transition.queryParams)) {
      this.transitionTo('protected.compare');
    }
  },

  model: function(params) {
    let compare = this.controllerFor('protected.compare');
    compare.set('selectedStrains', params.strain_ids);
    compare.set('selectedCharacteristics', params.characteristic_ids);
    return this.store.query('measurement', params);
  },

});
