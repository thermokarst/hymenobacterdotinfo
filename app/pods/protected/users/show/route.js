import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    this._super(transition);

    this.get('session.currentUser').then((currentUser) => {
      let user_id = transition.params['protected.users.show'].user_id;
      if (!currentUser.get('isAdmin') && currentUser.get('id') !== user_id) {
        this.transitionTo('protected.users.index');
      }
    });
  },

  model: function(params) {
    return this.store.findRecord('user', params.user_id, { reload: true });
  },

});
