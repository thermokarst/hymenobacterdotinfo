import Ember from 'ember';
import SetupMetaData from '../../../../mixins/setup-metadata';

const { Component } = Ember;

export default Component.extend(SetupMetaData, {
  // Read-only attributes
  characteristic: null,
  isDirty: false,

  // Actions
  "on-save": null,
  "on-cancel": null,
  "on-update": null,

  // Property mapping
  propertiesList: ['characteristicName', 'characteristicTypeName', 'sortOrder'],
  characteristicName: null,
  characteristicTypeName: null,
  sortOrder: null,

  resetOnInit: Ember.on('init', function() {
    this.get('propertiesList').forEach((field) => {
      const valueInCharacteristic = this.get('characteristic').get(field);
      this.set(field, valueInCharacteristic);
    });
  }),

  updateField: function(property, value) {
    this.set(property, value);
    // Manually compare against passed in value
    if (this.get('characteristic').get(property) !== value) {
      this.set('isDirty', true);
    } else {
      this.set('isDirty', false);
    }
  },

  actions: {
    save: function() {
      return this.attrs['on-save'](this.getProperties(this.get('propertiesList')));
    },

    cancel: function() {
      return this.attrs['on-cancel']();
    },

    characteristicNameDidChange: function(value) {
      this.updateField('characteristicName', value);
    },

    characteristicTypeNameDidChange: function(value) {
      this.updateField('characteristicTypeName', value);
    },

    sortOrderDidChange: function(value) {
      this.updateField('sortOrder', value);
    },
  },
});
