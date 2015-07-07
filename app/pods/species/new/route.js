import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      species: this.store.createRecord('species'),
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  },

});
