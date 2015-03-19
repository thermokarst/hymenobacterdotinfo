import DS from 'ember-data';

export default DS.Model.extend({
  strain: DS.belongsTo('strain'),
  characteristic: DS.attr('string'),
  textMeasurementType: DS.attr('string'),
  txtValue: DS.attr('string'),
  numValue: DS.attr('number'),
  confidenceInterval: DS.attr('number'),
  unitType: DS.attr('string'),
  notes: DS.attr('string'),
  testMethod: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
