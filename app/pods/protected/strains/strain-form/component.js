import Ember from 'ember';
import SetupMetaData from '../../../../mixins/setup-metadata';

const { Component } = Ember;

export default Component.extend(SetupMetaData, {
  // Read-only attributes
  strain: null,
  isNew: null,
  isDirty: false,
  speciesList: null,

  // Actions
  "on-save": null,
  "on-cancel": null,
  "on-update": null,

  // Property mapping
  propertiesList: ['strainName', 'typeStrain', 'species', 'isolatedFrom', 'accessionNumbers', 'genbank', 'wholeGenomeSequence', 'notes'],
  strainName: null,
  typeStrain: null,
  species: null,
  isolatedFrom: null,
  accessionNumbers: null,
  genbank: null,
  wholeGenomeSequence: null,
  notes: null,

  resetOnInit: Ember.on('init', function() {
    this.get('propertiesList').forEach((field) => {
      const valueInStrain = this.get('strain').get(field);
      this.set(field, valueInStrain);
    });
    // Read-only attributes
    this.set('isNew', this.get('strain.isNew'));
  }),

  updateField: function(property, value) {
    this.set(property, value);
    // Manually compare against passed in value
    if (this.get('strain').get(property) !== value) {
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

    strainNameDidChange: function(value) {
      this.updateField('strainName', value);
    },

    typeStrainDidChange: function() {
      this.updateField('typeStrain', !this.get('typeStrain'));
    },

    speciesDidChange: function(value) {
      this.updateField('species', value);
    },

    isolatedFromDidChange: function(value) {
      this.updateField('isolatedFrom', value);
    },

    accessionNumbersNameDidChange: function(value) {
      this.updateField('accessionNumbers', value);
    },

    genbankDidChange: function(value) {
      this.updateField('genbank', value);
    },

    wholeGenomeSequenceDidChange: function(value) {
      this.updateField('wholeGenomeSequence', value);
    },

    notesDidChange: function(value) {
      this.updateField('strain.notes', value);
    },
  },
});
