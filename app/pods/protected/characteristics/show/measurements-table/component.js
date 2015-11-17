import Ember from 'ember';

const { Component, computed } = Ember;
const { alias, sort } = computed;

export default Component.extend({
  characteristic: null,

  measurementsPresent: computed('characteristic', function() {
    return this.get('characteristic.measurements.length') > 0;
  }),

  measurements: alias('characteristic.measurements'),
  sortParams: ['strain.sortOrder'],
  sortedMeasurements: sort('measurements', 'sortParams'),

  actions: {
    changeSortParam: function(col) {
      const sort = this.get('sortAsc') ? 'asc' : 'desc';
      const sortCol = `${col}:${sort}`;
      this.set('sortParams', [sortCol]);
      this.set('paramsChanged', true);
      this.toggleProperty('sortAsc');
      return false;
    },

    resetSortParam: function() {
      this.set('sortParams', ['characteristic.characteristicTypeName', 'characteristic.sortOrder', 'characteristic.characteristicName']);
      this.set('paramsChanged', false);
      this.set('sortAsc', true);
      return false;
    },
  },

});
