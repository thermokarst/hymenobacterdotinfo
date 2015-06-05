import Ember from 'ember';

export default Ember.Component.extend({
  canAdd: function() {
    let role = this.get('session.currentUser.role');
    return (role === 'W') || (role === 'A');
  }.property('session.currentUser.role')
});
