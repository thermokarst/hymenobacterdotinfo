import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  characteristicName: DS.attr(),
  characteristicTypeId: DS.attr(),
  measurements: DS.hasMany('measurement', {async: true}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  deletedAt: DS.attr('date')
});
