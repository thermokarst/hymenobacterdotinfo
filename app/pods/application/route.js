import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    invalidateSession: function() {
      this.get('session').invalidate().then(() => {
        // Wait until promise is resolved
        return true;
      });
    },

    didTransition: function() {
      this.get('flashMessages').clearMessages();
      return true;
    },

  }
});
