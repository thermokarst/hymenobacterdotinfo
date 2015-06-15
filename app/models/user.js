import DS from 'ember-data';

export default DS.Model.extend({
  email    : DS.attr('string'),
  name     : DS.attr('string'),
  role     : DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  deletedAt: DS.attr('date')
});
