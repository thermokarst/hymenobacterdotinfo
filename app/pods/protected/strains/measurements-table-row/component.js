import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'tr',
  isEditing: false,
  allCharacteristics: null,
  measurement: null,

  // Actions
  "save-measurement": null,
  "delete-measurement": null,

  oldCharacteristicId: function() {
    const json = this.get('measurement').toJSON();
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
      this.attrs['delete-measurement'](this.get('measurement'));
    },

  },
});
