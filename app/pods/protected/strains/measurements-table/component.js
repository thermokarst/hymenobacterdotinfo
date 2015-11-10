import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  measurementsPresent: function() {
    return this.get('model.measurements.length') > 0;
  }.property('model.measurements'),

  fetchCharacteristics: function() {
    if (this.get('canEdit')) {
      this.store.findAll('characteristic');
    }
  }.on('didInsertElement'),

  sortParams: ['characteristic.characteristicTypeName', 'characteristic.sortOrder', 'characteristic.characteristicName'],
  sortAsc: true,
  paramsChanged: false,
  sortedMeasurements: Ember.computed.sort('model.measurements', 'sortParams'),

  actions: {
    addCharacteristic: function() {
      const c = this.store.createRecord('characteristic', {
        sortOrder: -999
      });
      const m = this.store.createRecord('measurement', {
        characteristic: c
      });
      this.get('model.measurements').addObject(m);
    },

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
