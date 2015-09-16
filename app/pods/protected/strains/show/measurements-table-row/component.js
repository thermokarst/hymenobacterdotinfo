import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isEditing: false,

  actions: {
    edit: function() {
      this.toggleProperty('isEditing');
    },

    save: function() {
      this.toggleProperty('isEditing');
      console.log('saved');
    }
  },
});
