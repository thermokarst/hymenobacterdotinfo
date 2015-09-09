import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    this._super(transition);
    this.get('session.currentUser').then((user) => {
      if (!user.get('isAdmin')) {
        this.transitionTo('protected.index');
      }
    });
  },

  model: function() {
    return this.store.findAll('user');
  },

});
