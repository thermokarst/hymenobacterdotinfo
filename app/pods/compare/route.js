import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  resetController: function(controller, isExiting /*, transition*/) {
    if (isExiting) {
      controller.set('data', null);
      controller.set('strains', null);
      controller.set('dataEmpty', true);
    }
  }
});
