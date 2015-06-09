import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('species');
  },
  setupController: function(controller, model) {
    var tableAttrs = [
      { name: 'Name', attr: 'speciesName' },
      { name: 'Strains', attr: 'totalStrains' }
    ];
    controller.set('model', model);
    controller.set('tableAttrs', tableAttrs);
    controller.set('row', 'species-index-row');
    controller.set('sort', ['speciesName']);
  },
});
