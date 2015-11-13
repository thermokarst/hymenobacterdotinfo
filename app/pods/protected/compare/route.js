import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model: function() {
    return this.store.findAll('characteristic');
  },

  setupController: function(controller/*, model*/) {
    controller.set('characteristics', this.store.peekAll('characteristic'));
    controller.set('strains', this.store.peekAll('strain'));
  },

});
