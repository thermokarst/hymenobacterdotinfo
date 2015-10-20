import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      user: this.store.createRecord('user'),
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  },

});
