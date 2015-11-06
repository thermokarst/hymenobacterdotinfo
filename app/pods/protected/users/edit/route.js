import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  currentUser: service('session-account'),

  // Not using ElevatedAccess Mixin because the rules for viewing user accounts
  // is slightly different.
  beforeModel: function(transition) {
    this._super(transition);

    let user_id = transition.params['protected.users.edit'].user_id;

    this.get('currentUser.account').then((user) => {
      if (user.get('id') !== user_id && !user.get('isAdmin')) {
        this.transitionTo('protected.users.index');
      }
    });
  },

  model: function(params) {
    return this.store.findRecord('user', params.user_id);
  },

});
