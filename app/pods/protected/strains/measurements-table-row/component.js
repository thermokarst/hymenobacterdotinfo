import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'tr',

  // Read-only attributes
  isEditing: false,
  allCharacteristics: null,
  measurement: null,
  isDirty: null,

  // Actions
  "save-measurement": null,
  "delete-measurement": null,

  // Property mapping
  propertiesList: ['characteristic', 'value', 'notes'],
  characteristic: null,
  value: null,
  notes: null,

  resetOnInit: Ember.on('init', function() {
    this.get('propertiesList').forEach((field) => {
      const valueInMeasurement = this.get('measurement').get(field);
      this.set(field, valueInMeasurement);
    });
  }),

  updateField: function(property, value) {
    this.set(property, value);
    // Manually compare against passed in value
    if (this.get('measurement').get(property) !== value) {
      this.set('isDirty', true);
    } else {
      this.set('isDirty', false);
    }
  },

  actions: {
    edit: function() {
      this.toggleProperty('isEditing');
    },

    save: function() {
      this.attrs['save-measurement'](this.get('measurement'), this.getProperties(this.get('propertiesList')));
      this.toggleProperty('isEditing');
    },

    delete: function() {
      this.attrs['delete-measurement'](this.get('measurement'));
    },

    characteristicDidChange: function(value) {
      const newCharacteristic = this.get('allCharacteristics').findBy('id', value);
      this.updateField('characteristic', newCharacteristic);
    },

    valueDidChange: function(value) {
      this.updateField('value', value);
    },

    notesDidChange: function(value) {
      this.updateField('notes', value);
    },

  },
});
