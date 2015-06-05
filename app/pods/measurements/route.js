import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      measurements: this.store.findAll('measurement'),
      species: this.store.findAll('species')
    });
  },
  setupController: function(controller, models) {
    var tableAttrs = [
      { name: 'Strain', attr: 'strain.strainName' },
      { name: 'Characteristic', attr: 'characteristic.CharacteristicName' },
      { name: 'Value', attr: 'computedValue'}
    ];
    controller.set('model', models);
    controller.set('tableAttrs', tableAttrs);
    controller.set('row', 'measurement-index-row');
  },
});
