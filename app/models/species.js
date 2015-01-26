import DS from 'ember-data';

export default DS.Model.extend({
  speciesName: DS.attr(),
  genus: DS.belongsTo('genus', {async: true}),
  strains: DS.hasMany('strain', {async: true}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  deletedAt: DS.attr('date')
});
