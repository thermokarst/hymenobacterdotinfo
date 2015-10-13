import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    this._super(transition);

    if (this.get('session.currentUser.role') !== 'A') {
      let user_id = transition.params['protected.users.show'].user_id;
      let currentUser_id = this.get('session.currentUser.id')
      if (currentUser_id !== user_id) {
        this.transitionTo('protected.users.show', currentUser_id);
      }
    }
  },

  model: function(params) {
    return this.store.findRecord('user', params.user_id, { reload: true });
  },

});
