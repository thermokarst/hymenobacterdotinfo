import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      user: this.store.createRecord('user'),
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  },

  actions: {
    success: function() {
      this.transitionTo('login');
      this.get('flashMessages').information(`You have successfully signed up.
        Please check your email for further instructions.`);
    }
  },
});
