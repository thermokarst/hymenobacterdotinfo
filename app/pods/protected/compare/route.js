import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('characteristic');
  },

  setupController: function(controller, model) {
    controller.set('characteristics', this.store.peekAll('characteristic'));
    controller.set('strains', this.store.peekAll('strain'));
  },

});
