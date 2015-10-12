import Ember from 'ember';

export default Ember.Component.extend({
  isAdmin: Ember.computed('currentUser', function() {
    return this.get('currentUser.role') == 'A';
  }),

  roles: Ember.String.w('A R W'),

  actions: {
    save: function() {
      this.sendAction('save');
    },

    cancel: function() {
      this.sendAction('cancel');
    },
  }
});
