import Ember from 'ember';

const { Component, computed } = Ember;
const { sort } = computed;

export default Component.extend({
  // Passed in
  strain: null,
  allCharacteristics: null,
  canEdit: false,
  canAdd: false,
  "add-characteristic": null,

  // Properties
  sortParams: ['characteristic.characteristicTypeName', 'characteristic.sortOrder', 'characteristic.characteristicName'],
  sortAsc: true,
  paramsChanged: false,
  sortedMeasurements: sort('strain.measurements', 'sortParams'),
  measurementsPresent: computed('strain.measurements', function() {
    return this.get('strain.measurements.length') > 0;
  }),

  // TODO: remove this
  // fetchCharacteristics: function() {
  //   if (this.get('canEdit')) {
  //     this.store.findAll('characteristic');
  //   }
  // }.on('didInsertElement'),

  actions: {
    addCharacteristic: function() {
      const newChar = this.attrs['add-characteristic']();
      this.get('strain.measurements').addObject(newChar);
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
  },

});
