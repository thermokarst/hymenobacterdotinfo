import DS from 'ember-data';

export default DS.Model.extend({
  strain             : DS.belongsTo('strain', { async: false }),
  characteristic     : DS.belongsTo('characteristic', { async: false }),
  value              : DS.attr('string'),
  confidenceInterval : DS.attr('number'),
  unitType           : DS.attr('string'),
  notes              : DS.attr('string'),
  testMethod         : DS.attr('string'),
  createdAt          : DS.attr('date'),
  updatedAt          : DS.attr('date'),
  createdBy          : DS.attr('number'),
  updatedBy          : DS.attr('number'),
});
