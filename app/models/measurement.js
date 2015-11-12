import DS from 'ember-data';

const { Model, belongsTo, attr } = DS;

export default Model.extend({
  strain             : belongsTo('strain', { async: false }),
  characteristic     : belongsTo('characteristic', { async: false }),
  value              : attr('string'),
  confidenceInterval : attr('number'),
  unitType           : attr('string'),
  notes              : attr('string'),
  testMethod         : attr('string'),
  createdAt          : attr('date'),
  updatedAt          : attr('date'),
  createdBy          : attr('number'),
  updatedBy          : attr('number'),
});
