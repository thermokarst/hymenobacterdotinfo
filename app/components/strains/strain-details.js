import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid-1'],
  isEditing: false,
  actions: {
    save: function() {
      this.sendAction('save');
    },
    cancel: function() {
      this.sendAction('cancel');
    },
  }
});
