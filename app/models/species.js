import DS from 'ember-data';

export default DS.Model.extend({
  speciesName: DS.attr('string'),
  typeSpecies: DS.attr('boolean'),
  etymology: DS.attr('string'),
  genusName: DS.attr('string'),
  strains: DS.hasMany('strain'),
  totalStrains: DS.attr('number'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  deletedAt: DS.attr('date'),
  createdBy: DS.attr('number'),
  updatedBy: DS.attr('number'),
  deletedBy: DS.attr('number'),
});
