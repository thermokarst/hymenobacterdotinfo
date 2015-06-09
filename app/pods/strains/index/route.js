import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('strain');
  },
  setupController: function(controller, model) {
    var tableAttrs = [
      { name: 'Name', attr: 'fullName' },
      { name: 'Total Measurements', attr: 'totalMeasurements' }
    ];
    controller.set('model', model);
    controller.set('tableAttrs', tableAttrs);
    controller.set('row', 'strain-index-row');
    controller.set('sort', ['fullName']);
  },
});
