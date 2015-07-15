import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('strain');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('metaData', this.store.metadataFor('strain'));
  },

});
