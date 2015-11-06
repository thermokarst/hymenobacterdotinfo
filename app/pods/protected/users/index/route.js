import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  currentUser: service('session-account'),

  beforeModel: function(transition) {
    this._super(transition);
    this.get('currentUser.account').then((user) => {
      if (!user.get('isAdmin')) {
        this.transitionTo('protected.index');
      }
    });
  },

  model: function() {
    return this.store.findAll('user');
  },

});
