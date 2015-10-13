import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    this._super(transition);

    let user_id = transition.params['protected.users.changepassword'].user_id;
    if (this.get('session.currentUser.id') !== user_id) {
      this.transitionTo('protected.users.index');
    }
  }
});
