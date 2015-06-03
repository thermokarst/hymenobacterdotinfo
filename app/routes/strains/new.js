import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      strain: this.store.createRecord('strain'),
      species: this.store.findAll('species')
    });
  },
  actions: {
    cancelStrain: function() {
      this.transitionTo('strains.index');
    }
  }
});
