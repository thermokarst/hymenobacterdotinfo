import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return Ember.RSVP.hash({
      species: this.store.find('species', params.species_id),
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  },
});
