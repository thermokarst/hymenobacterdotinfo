import DS from 'ember-data';

export default DS.Model.extend({
  strain             : DS.belongsTo('strain', { async: true }),
  characteristic     : DS.belongsTo('characteristic', { async: true }),
  textMeasurementType: DS.attr('string'),
  txtValue           : DS.attr('string'),
  numValue           : DS.attr('number'),
  confidenceInterval : DS.attr('number'),
  unitType           : DS.attr('string'),
  notes              : DS.attr('string'),
  testMethod         : DS.attr('string'),
  createdAt          : DS.attr('date'),
  updatedAt          : DS.attr('date'),
  createdBy          : DS.attr('number'),
  updatedBy          : DS.attr('number'),

  value: function() {
    if (this.get('textMeasurementType')) {
      return this.get('textMeasurementType');
    }
    if (this.get('txtValue')) {
      return this.get('txtValue');
    }
    if (this.get('numValue')) {
      return this.get('numValue');
    }
    return "error";
  }.property('textMeasurementType', 'txtValue', 'numValue'),
});
