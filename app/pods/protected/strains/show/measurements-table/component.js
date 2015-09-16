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

  sortParams: ['characteristicTypeName', 'sortOrder', 'characteristicName'],
  sortedMeasurements: Ember.computed.sort('model.measurements', 'sortParams'),

});
