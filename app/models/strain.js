import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  measurements: DS.hasMany('measurements', { async: true }),
  speciesName: DS.attr('string'),
  strainName: DS.attr('string'),
  typeStrain: DS.attr('boolean'),
  accessionNumbers: DS.attr('string'),
  genbank: DS.attr('string'),
  isolatedFrom: DS.attr('string'),
  notes: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  deletedAt: DS.attr('date'),
  createdBy: DS.attr('number'),
  updatedBy: DS.attr('number'),
  deletedBy: DS.attr('number'),
  totalMeasurements: DS.attr('number'),
  fullName: Ember.computed('speciesName', 'strainName', function() {
    return this.get('speciesName') + ' (' + this.get('strainName') + ')';
  })
});
