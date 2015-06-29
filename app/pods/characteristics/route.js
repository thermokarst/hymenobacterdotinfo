import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      characteristicTypes: this.store.findAll('characteristic-type'),
      characteristics: this.store.findAll('characteristic'),
    });
  },

  setupController: function(controller, models) {
    controller.setProperties(models);
  },
});
