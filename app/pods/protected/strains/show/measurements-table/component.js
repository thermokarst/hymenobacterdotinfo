import Ember from 'ember';

export default Ember.Component.extend({
  measurementsPresent: function() {
    return this.get('model.measurements.length') > 0;
  }.property('model.measurements'),

  measurementsTable: function() {
    let measurements = this.get('model.measurements');
    let table = [];
    measurements.forEach((measurement) => {
      let row = {};
      row['measurement'] = measurement;
      row['characteristic'] = this.store.peekRecord('characteristic', measurement.get('characteristic.id'));
      table.push(row);
    });
    table.sort((a, b) => {
      let a_sort = a['characteristic'] && a['characteristic'].get('sortOrder');
      let b_sort = b['characteristic'] && b['characteristic'].get('sortOrder');
      return a_sort - b_sort;
    });
    return table;
  }.property(),

});
