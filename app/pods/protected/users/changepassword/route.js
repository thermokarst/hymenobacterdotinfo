import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    this._super(transition);

    let user_id = transition.params['protected.users.changepassword'].user_id;

    this.get('session.currentUser').then((user) => {
      if (user.get('id') !== user_id) {
        this.transitionTo('protected.users.index');
      }
    });
  }
});
