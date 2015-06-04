import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
/* global NProgress */

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    loading: function() {
      NProgress.start();
      this.router.one('didTransition', function() {
        return setTimeout((function() {
          return NProgress.done();
        }), 50);
      });
      return true;
    }
  }
});
