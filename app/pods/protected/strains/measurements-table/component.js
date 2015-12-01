import Ember from 'ember';

const { Component, computed } = Ember;
const { sort } = computed;

export default Component.extend({
  // Passed in
  measurements: null,
  allCharacteristics: null,
  canEdit: false,
  canAdd: false,

  // Actions
  "add-characteristic": null,
  "save-measurement": null,
  "delete-measurement": null,

  // Properties
  sortParams: ['characteristic.characteristicTypeName', 'characteristic.sortOrder', 'characteristic.characteristicName'],
  sortAsc: true,
  paramsChanged: false,
  sortedMeasurements: sort('measurements', 'sortParams'),
  measurementsPresent: computed('measurements', function() {
    return this.get('measurements.length') > 0;
  }),

  actions: {
    addCharacteristic: function() {
      const measurement = this.attrs['add-characteristic']();
      this.get('measurements').addObject(measurement);
    },

    changeSortParam: function(col) {
      const sort = this.get('sortAsc') ? 'asc' : 'desc';
      this.set('sortParams', [`${col}:${sort}`]);
      this.set('paramsChanged', true);
      this.toggleProperty('sortAsc');
    },

    resetSortParam: function() {
      this.set('sortParams', ['characteristic.characteristicTypeName', 'characteristic.sortOrder', 'characteristic.characteristicName']);
      this.set('paramsChanged', false);
      this.set('sortAsc', true);
    },

    saveMeasurement: function(measurement, properties) {
      return this.attrs['save-measurement'](measurement, properties);
    },

    deleteMeasurement: function(measurement) {
      return this.attrs['delete-measurement'](measurement);
    },
  },

});
