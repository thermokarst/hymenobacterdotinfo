import Ember from 'ember';

export default Ember.Route.extend({
  resetController: function(controller, isExiting /*, transition*/) {
    if (isExiting) {
      controller.set('data', null);
      controller.set('strains', null);
      controller.set('dataEmpty', true);
    }
  }
});
