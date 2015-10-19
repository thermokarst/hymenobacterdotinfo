import Ember from 'ember';

export default Ember.Component.extend({
  measurementsPresent: function() {
    return this.get('model.measurements.length') > 0;
  }.property('model.measurements'),

  sortParams: ['characteristic.characteristicTypeName', 'characteristic.sortOrder', 'characteristic.characteristicName'],
  sortAsc: true,
  paramsChanged: false,
  sortedMeasurements: Ember.computed.sort('model.measurements', 'sortParams'),

  actions: {
    changeSortParam: function(col) {
      let sort = this.get('sortAsc') ? 'asc' : 'desc';
      let sortCol = `${col}:${sort}`;
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
