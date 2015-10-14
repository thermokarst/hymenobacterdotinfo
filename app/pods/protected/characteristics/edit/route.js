import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {
    this._super(transition);
    this.get('session.currentUser').then((user) => {
      if (user.get('isReader')) {
        this.transitionTo('protected.characteristics.index');
      }
    });
  },

  model: function(params) {
    return this.store.findRecord('characteristic', params.characteristic_id, { reload: true });
  },

  afterModel: function(model) {
    if (!model.get('canEdit')) {
      this.transitionTo('characteristics.show', model.get('id'));
    }
  },

});
