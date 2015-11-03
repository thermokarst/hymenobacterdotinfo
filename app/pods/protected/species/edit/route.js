import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  currentUser: service('session-account'),

  beforeModel: function(transition) {
    this._super(transition);
    this.get('currentUser.account').then((user) => {
      if (user.get('isReader')) {
        this.transitionTo('protected.species.index');
      }
    });
  },

  afterModel: function(model) {
    if (!model.get('canEdit')) {
      this.transitionTo('species.show', model.get('id'));
    }
  },

});
