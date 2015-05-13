import { Ability } from 'ember-can';

export default Ability.extend({
  // Only admins and writers can create a new strain
  canAdd: function() {
    let role = this.get('session.currentUser.role');
    return (role === 'W') || (role === 'A');
  }.property('session.currentUser.role'),

  // Only admins and the person who created can edit
  canEdit: function() {
    let role = this.get('session.currentUser.role');
    let id = this.get('session.currentUser.id');
    let author = this.get('model.createdBy');
    return (role === 'W' && (+id === author)) || (role === 'A');
  }.property('session.currentUser.role', 'session.currentUser.id', 'model.createdBy')
});
