import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      species: this.store.findAll('species'),
      strains: this.store.findAll('strain'),
      characteristics: this.store.findAll('characteristic'),
    });
  },
  setupController: function(controller, models) {
    controller.set('measurements', []);

    // Set up search parameters
    models.strains = models.strains.sortBy('fullName');
    let strains = models.strains.map((strain)=>{
      return Ember.Object.create({
        id: strain.get('id'),
        text: strain.get('fullName'),
      });
    });
    strains.unshiftObjects(Ember.Object.create({
      id: 'all',
      text: 'All Strains',
    }));
    controller.set('strains', strains);

    models.characteristics = models.characteristics.sortBy('characteristicName');
    let characteristics = models.characteristics.map((characteristic)=>{
      return Ember.Object.create({
        id: characteristic.get('id'),
        text: characteristic.get('characteristicName'),
      });
    });
    characteristics.unshiftObjects(Ember.Object.create({
      id: 'all',
      text: 'All Characteristics',
    }));
    controller.set('characteristics', characteristics);
  },
});
