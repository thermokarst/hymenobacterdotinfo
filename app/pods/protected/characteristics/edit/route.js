import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return this.store.findRecord('characteristic', params.characteristic_id, { reload: true });
  },

  afterModel: function(model) {
    if (!model.get('canEdit')) {
      this.transitionTo('characteristics.show', model.get('id'));
    }
  },

});
