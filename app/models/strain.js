import DS from 'ember-data';

export default DS.Model.extend({
  strainName: DS.attr(),
  strainType: DS.attr(),
  etymology: DS.attr(),
  accessionBanks: DS.attr(),
  genbankEmblDdb: DS.attr(),
  isolatedFrom: DS.attr(),
  species: DS.belongsTo('species', {async: true}),
  measurements: DS.hasMany('measurement', {async: true}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  deletedAt: DS.attr('date')
});
