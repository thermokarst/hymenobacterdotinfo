import Ember from 'ember';

export default Ember.Component.extend({
  measurementsPresent: function() {
    return this.get('model.measurements.length') > 0;
  }.property('model.measurements'),

  // TODO: this is way more complicated than it should be
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
