import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('species');
  },
  actions: {
    cancelSpecies: function() {
      this.transitionTo('species.index');
    }
  }
});
