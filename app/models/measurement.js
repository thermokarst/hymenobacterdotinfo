import DS from 'ember-data';

export default DS.Model.extend({
  characteristicId: DS.attr(),
  textMeasurementTypeId: DS.attr(),
  txtValue: DS.attr(),
  numValue: DS.attr(),
  confidenceInterval: DS.attr(),
  unitTypeId: DS.attr(),
  notes: DS.attr(),
  testMethodId: DS.attr(),
  strain: DS.belongsTo('strain', {async: true}),
  characteristic: DS.belongsTo('characteristic', {async: true}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
