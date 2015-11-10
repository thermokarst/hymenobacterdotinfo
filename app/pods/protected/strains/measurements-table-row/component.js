import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'tr',
  isEditing: false,
  allCharacteristics: null,
  measurement: null,

  oldCharacteristicId: function() {
    let json = this.get('measurement').toJSON();
    return json.characteristic;
  }.property(),

  rowChanged: computed('measurement.notes', 'measurement.value', 'measurement.characteristic.id', function() {
    return this.get('measurement.hasDirtyAttributes') ||
      this.get('oldCharacteristicId') !== this.get('measurement.characteristic.id');
  }),

  actions: {
    edit: function() {
      this.toggleProperty('isEditing');
    },

    save: function() {
      this.attrs['save-measurement'](this.get('measurement'));
      this.toggleProperty('isEditing');
    },

    delete: function() {
      let char = this.get('measurement.characteristic');
      if (char.get('isNew')) {
        char.destroyRecord();
      }
      this.get('measurement').destroyRecord();
    }

  },
});
