import Ember from 'ember';

export default Ember.Component.extend({
  measurementsTable: function() {
    let measurements = this.get('model.measurements');
    let table = [];
    measurements.forEach((measurement) => {
      let row = {};
      row['measurement'] = measurement;
      row['strain'] = this.store.peekRecord('strain', measurement.get('strain.id'));
      table.push(row);
    });
    return table;
  }.property(),

});
