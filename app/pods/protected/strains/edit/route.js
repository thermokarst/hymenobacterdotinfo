import Ember from 'ember';
import ElevatedAccess from '../../../../mixins/elevated-access';

const { Route } = Ember;

export default Route.extend(ElevatedAccess, {
  // Required for ElevatedAccess mixin
  fallbackRouteBefore: 'protected.strains.index',
  fallbackRouteAfter: 'protected.strains.show',

  model: function(params) {
    return Ember.RSVP.hash({
      strain: this.store.findRecord('strain', params.strain_id),
      species: this.store.findAll('species'), // Need for dropdown
    });
  },

  // Overriding afterModel because of RSVP hash
  afterModel: function(models) {
    if (!models.strain.get('isNew') && !models.strain.get('canEdit')) {
      this.transitionTo(this.get('fallbackRouteAfter'), models.strain.get('id'));
    }
  },

  // Setting up controller because of RSVP hash
  setupController: function(controller, models) {
    controller.set('model', models.strain);
    controller.set('speciesList', models.species);
  },

  actions: {
    // Overriding willTransition because of RSVP hash
    willTransition: function(/*transition*/) {
      const controller = this.get('controller');
      const model = controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    },
  },
});
