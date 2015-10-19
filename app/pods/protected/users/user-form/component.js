import Ember from 'ember';

export default Ember.Component.extend({
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
