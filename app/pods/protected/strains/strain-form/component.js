import Ember from 'ember';
import SetupMetaData from '../../../../mixins/setup-metadata';

const { Component, computed: { sort } } = Ember;

export default Component.extend(SetupMetaData, {
  // Read-only attributes
  strain: null,
  isNew: null,
  isDirty: false,
  speciesList: null,
  allCharacteristics: [],
  updateQueue: [],
  deleteQueue: [],

  // Actions
  "on-save": null,
  "on-cancel": null,
  "on-update": null,
  "add-characteristic": null,

  // CPs
  sortParams: ['sortOrder'],
  sortedSpeciesList: sort('speciesList', 'sortParams'),

  // Property mapping
  propertiesList: ['strainName', 'typeStrain', 'species', 'isolatedFrom', 'accessionNumbers', 'genbank', 'wholeGenomeSequence', 'notes', 'measurements'],
  strainName: null,
  typeStrain: null,
  species: null,
  isolatedFrom: null,
  accessionNumbers: null,
  genbank: null,
  wholeGenomeSequence: null,
  notes: null,
  measurements: [],

  // Dropdown menu
  characteristics: [],
  charSortParams: ['characteristicTypeName', 'sortOrder', 'characteristicName'],
  sortedCharacteristics: sort('characteristics', 'charSortParams'),
  setupCharacteristics: Ember.on('init', function() {
    const tempArray = this._resetArray(this.get('allCharacteristics'));
    this.set('characteristics', tempArray);
  }),

  resetOnInit: Ember.on('init', function() {
    this._resetProperties();
  }),

  _resetArray: function(arr) {
    let tempArray = [];
    arr.forEach((val) => {
      if (!val.get('isNew')) {
        tempArray.push(val);
      }
    });
    return tempArray;
  },

  _resetProperties: function() {
    // Still some coupling going on here because of adding strain to measurement
    this.get('measurements').forEach((val) => {
      if (val.get('hasDirtyAttributes')) {
        val.rollbackAttributes();
      }
      if (val.get('isNew')) {
        this.get('strain.measurements').removeObject(val);
      }
    });
    this.get('propertiesList').forEach((field) => {
      const valueInStrain = this.get('strain').get(field);
      if (field === 'measurements') {
        const tempArray = this._resetArray(valueInStrain);
        this.set(field, tempArray);
      } else {
        this.set(field, valueInStrain);
      }
    });
    this.set('updateQueue', []);
    this.set('deleteQueue', []);
    // Read-only attributes
    this.set('isNew', this.get('strain.isNew'));
  },

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
      return this.attrs['on-save'](this.getProperties(this.get('propertiesList')), this.get('deleteQueue'), this.get('updateQueue'));
    },

    cancel: function() {
      this._resetProperties();
      return this.attrs['on-cancel']();
    },

    addCharacteristic: function() {
      return this.attrs['add-characteristic']();
    },

    saveMeasurement: function(measurement, properties) {
      measurement.setProperties(properties);
      measurement.set('strain', this.get('strain'));
      if (!measurement.get('isNew')) {
        this.get('updateQueue').pushObject(measurement);
      }
      this.set('isDirty', true);
    },

    deleteMeasurement: function(value) {
      const characteristic = value.get('characteristic');
      if (characteristic.get('isNew')) {
        this.get('deleteQueue').pushObject(characteristic);
      }
      this.get('deleteQueue').pushObject(value);
      this.get('measurements').removeObject(value);
      this.set('isDirty', true);
    },

    strainNameDidChange: function(value) {
      this.updateField('strainName', value);
    },

    typeStrainDidChange: function() {
      this.updateField('typeStrain', !this.get('typeStrain'));
    },

    speciesDidChange: function(value) {
      const newSpecies = this.get('speciesList').findBy('id', value);
      this.updateField('species', newSpecies);
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
