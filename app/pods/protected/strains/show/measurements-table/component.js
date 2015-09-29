import Ember from 'ember';

export default Ember.Component.extend({
  measurementsPresent: function() {
    return this.get('model.measurements.length') > 0;
  }.property('model.measurements'),

  fetchCharacteristics: function() {
    if (this.get('canEdit')) {
      this.store.findAll('characteristic');
    }
  }.on('didInsertElement'),

  sortParams: ['characteristic.characteristicTypeName', 'characteristic.sortOrder', 'characteristic.characteristicName'],
  sortedMeasurements: Ember.computed.sort('model.measurements', 'sortParams'),

  actions: {
    addCharacteristic: function() {
      const c = this.store.createRecord('characteristic', {
        sortOrder: -999
      })
      const m = this.store.createRecord('measurement', {
        characteristic: c
      });
      this.get('model.measurements').addObject(m);
    },
  },

});
