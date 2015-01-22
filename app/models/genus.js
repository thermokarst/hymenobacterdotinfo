import DS from 'ember-data';
import Ember from 'ember';

var inflector = Ember.Inflector.inflector;
inflector.irregular('genus', 'genera');

export default DS.Model.extend({
  genusName: DS.attr(),
  species: DS.hasMany('species', {async: true}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  deletedAt: DS.attr('date')
});
