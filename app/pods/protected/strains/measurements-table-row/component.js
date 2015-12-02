import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'tr',

  // Read-only attributes
  isEditing: false,
  allCharacteristics: null,
  measurement: null,
  isDirty: null,
  isNew: false,
  isQueued: false,

  // Actions
  "save-measurement": null,
  "delete-measurement": null,

  // Property mapping
  propertiesList: ['characteristic', 'value', 'notes'],
  characteristic: null,
  value: null,
  notes: null,

  resetOnInit: Ember.on('init', function() {
    this._resetProperties();
  }),

  _resetProperties: function() {
    this.get('propertiesList').forEach((field) => {
      const valueInMeasurement = this.get('measurement').get(field);
      this.set(field, valueInMeasurement);
    });
    // Read-only attributes
    this.set('isNew', this.get('measurement.isNew'));
    if (this.get('isNew') && !this.get('isQueued')) {
      this.set('isEditing', true);
    } else {
      this.set('isEditing', false);
    }
    this.set('isDirty', false);
  },

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
      this.set('isEditing', true);
    },

    save: function() {
      this.attrs['save-measurement'](this.get('measurement'), this.getProperties(this.get('propertiesList')));
      this.set('isQueued', true);
      this._resetProperties();
    },

    cancel: function() {
      if (this.get('isNew')) {
        this.attrs['delete-measurement'](this.get('measurement'));
      } else {
        this._resetProperties();
        this.set('isEditing', false);
      }
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
