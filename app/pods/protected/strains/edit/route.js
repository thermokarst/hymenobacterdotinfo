import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return Ember.RSVP.hash({
      strain: this.store.find('strain', params.strain_id),
      species: this.store.findAll('species'), // Need for dropdown
    });
  },

  afterModel: function(models) {
    if (!models.strain.get('canEdit')) {
      this.transitionTo('strains.show', models.strain.get('id'));
    }
  },

  setupController: function(controller, models) {
    controller.setProperties(models);
    controller.set('metaData', this.store.metadataFor('strain'));
  },

});
