import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(species) {
    if (!species.get('canEdit')) {
      this.transitionTo('species.show', species.get('id'));
    }
  },

});
