import Ember from 'ember';

const { Component, computed } = Ember;
const { sort } = computed;

export default Component.extend({
  characteristic: null,

  measurementsPresent: computed('characteristic', function() {
    return this.get('characteristic.measurements.length') > 0;
  }),

  sortParams: ['characteristic.characteristicTypeName', 'characteristic.sortOrder', 'characteristic.characteristicName'],
  sortAsc: true,
  paramsChanged: false,
  sortedMeasurements: sort('characteristic.measurements', 'sortParams'),

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
