import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('session-account'),

  beforeModel: function(transition) {
    this._super(transition);
    this.get('currentUser.account').then((user) => {
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
