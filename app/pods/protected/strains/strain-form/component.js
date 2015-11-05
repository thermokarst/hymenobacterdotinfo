import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      this.sendAction('save');
    },

    cancel: function() {
      this.sendAction('cancel');
    },

    isolatedFromDidChange: function(value) {
      this.set('strain.isolatedFrom', value);
    },

    notesDidChange: function(value) {
      this.set('strain.notes', value);
    },
  },
});
