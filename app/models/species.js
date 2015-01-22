import DS from 'ember-data';

export default DS.Model.extend({
  genusId: DS.attr(),
  speciesName: DS.attr(),
  genus: DS.belongsTo('genus', {async: true}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  deletedAt: DS.attr('date')
});
