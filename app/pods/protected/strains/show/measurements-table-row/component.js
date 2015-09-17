import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isEditing: false,

  actions: {
    edit: function() {
      // The parent table fetches all of the characteristics ahead of time
      this.set('characteristics', this.store.peekAll('characteristic'));
      this.toggleProperty('isEditing');
    },

    save: function() {
      this.toggleProperty('isEditing');
      this.get('row').save();
    },
    
  },
});
