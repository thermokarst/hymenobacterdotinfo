import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('characteristic');
  },
  setupController: function(controller, model) {
    var tableAttrs = [
      { name: 'Name', attr: 'characteristicName' },
      { name: 'Type', attr: 'characteristicType' }
    ];
    controller.set('model', model);
    controller.set('tableAttrs', tableAttrs);
    controller.set('row', 'characteristic-index-row');
  },
});
