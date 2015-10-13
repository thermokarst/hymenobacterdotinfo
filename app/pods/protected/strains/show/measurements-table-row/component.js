import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isEditing: false,

  oldCharacteristicId: function() {
    let json = this.get('row').toJSON();
    return json.characteristic;
  }.property(),

  rowChanged: Ember.computed('row.notes', 'row.value', 'row.characteristic.id', function() {
    return this.get('row.hasDirtyAttributes') ||
      this.get('oldCharacteristicId') !== this.get('row.characteristic.id');
  }),

  actions: {
    edit: function() {
      // The parent table fetches all of the characteristics ahead of time
      this.set('characteristics', this.store.peekAll('characteristic'));
      this.toggleProperty('isEditing');
    },

    save: function() {
      this.toggleProperty('isEditing');
      if (this.get('rowChanged')) {
        this.get('row').save();
      }
    },

    delete: function() {
      this.get('row').destroyRecord();
    }

  },
});