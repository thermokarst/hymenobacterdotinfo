import DS from 'ember-data';

export default DS.Model.extend({
  measurements: DS.hasMany('measurements', { async: true }),
  speciesName: DS.attr('string'),
  strainName: DS.attr('string'),
  strainType: DS.attr('string'),
  etymology: DS.attr('string'),
  accessionBanks: DS.attr('string'),
  genbankEmblDdb: DS.attr('string'),
  isolatedFrom: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  deletedAt: DS.attr('date'),
  totalMeasurements: DS.attr('number')
});
