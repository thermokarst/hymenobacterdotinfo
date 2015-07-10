import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  afterModel: function(species) {
    if (!species.get('canEdit')) {
      this.transitionTo('species.show', species.get('id'));
    }
  },

});
