import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid-1'],
  isEditing: false,

  canEdit: function() {
    let role = this.get('session.currentUser.role');
    let id = this.get('session.currentUser.id');
    let author = this.get('strain.createdBy');
    return (role === 'W' && (+id === author)) || (role === 'A');
  }.property('session.currentUser.role', 'session.currentUser.id', 'strain.createdBy'),

  actions: {
    save: function() {
      this.sendAction('save');
    },
    cancel: function() {
      this.sendAction('cancel');
    },
  }
});
