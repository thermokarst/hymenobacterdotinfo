import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  currentUser: service('session-account'),

  beforeModel: function(transition) {
    this._super(transition);

    // Only the logged in user can change their password
    const user_id = transition.params['protected.users.changepassword'].user_id;

    this.get('currentUser.account').then((user) => {
      if (user.get('id') !== user_id) {
        this.transitionTo('protected.users.show', user.get('id'));
      }
    });
  }
});
