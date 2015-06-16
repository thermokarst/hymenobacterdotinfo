import DS from 'ember-data';

export default DS.Model.extend({
  characteristicTypeName: DS.attr('string'),
  characteristics: DS.hasMany('characteristic', { async: true }),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  deletedAt: DS.attr('date'),
  createdBy: DS.attr('number'),
  updatedBy: DS.attr('number'),
  deletedBy: DS.attr('number')
});
