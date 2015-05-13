import DS from 'ember-data';
import Ember from 'ember';

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
  updatedAt: DS.attr('date'),
  createdBy: DS.attr('number'),
  updatedBy: DS.attr('number'),
  computedType: Ember.computed('textMeasurementType', 'txtValue', 'numValue', function() {
    if (this.get('textMeasurementType') && !this.get('txtValue') && !this.get('numValue')) {
      return 'Fixed-text';
    } else if (!this.get('textMeasurementType') && this.get('txtValue') && !this.get('numValue')) {
      return 'Free-text';
    } else if (!this.get('textMeasurementType') && !this.get('txtValue') && this.get('numValue')) {
      return 'Numerical';
    } else {
      return "error";
    }
  }),
  computedValue: Ember.computed('textMeasurementType', 'txtValue', 'numValue', function() {
    var val;
    if (this.get('computedType') === 'Fixed-text') {
      val = this.get('textMeasurementType');
    } else if (this.get('computedType') === 'Free-text') {
      val = this.get('txtValue');
    } else if (this.get('computedType') === 'Numerical') {
      val = this.get('numValue');
      if (this.get('confidenceInterval')) {
        val = val + ' &pm; ' + this.get('confidenceInterval');
      }
    } else {
      val = "error";
    }
    if (this.get('unitType')) {
      val = val + ' ' + this.get('unitType');
    }
    return val;
  })
});
