import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('session-account'),

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
    return this.store.findRecord('user', params.user_id, { reload: true });
  },

});
