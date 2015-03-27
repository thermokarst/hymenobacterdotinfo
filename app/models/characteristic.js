import DS from 'ember-data';

export default DS.Model.extend({
  characteristicName: DS.attr('string'),
  characteristicType: DS.attr('string'),
  strains: DS.hasMany('strain'),
  measurements: DS.hasMany('measurements'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  deletedAt: DS.attr('date')
});
