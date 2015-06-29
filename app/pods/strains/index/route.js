import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      strains: this.store.findAll('strain'),
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  },
});
