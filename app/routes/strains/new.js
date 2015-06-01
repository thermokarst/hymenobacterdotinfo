import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('strain');
  },
  actions: {
    cancelStrain: function() {
      this.transitionTo('strains.index');
    }
  }
});
