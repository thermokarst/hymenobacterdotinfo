import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      strain: this.store.createRecord('strain'),
      species: this.store.findAll('species'), // Need for dropdown
    });
  },

  afterModel: function(models) {
    console.log('after model');
  },

  setupController: function(controller, models) {
    controller.setProperties(models);
  },

});
