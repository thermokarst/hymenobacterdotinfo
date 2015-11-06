import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  currentUser: service('session-account'),

  // Not using ElevatedAccess Mixin because the rules for viewing user accounts
  // is slightly different.
  beforeModel: function(transition) {
    this._super(transition);

    this.get('currentUser.account').then((user) => {
      const user_id = transition.params['protected.users.show'].user_id;
      if (!user.get('isAdmin') && user.get('id') !== user_id) {
        this.transitionTo('protected.users.index');
      }
    });
  },

  model: function(params) {
    return this.store.findRecord('user', params.user_id);
  },

});
