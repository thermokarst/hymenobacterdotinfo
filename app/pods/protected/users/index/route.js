import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('session-account'),

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
