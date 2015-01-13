import DS from 'ember-data';
import Ember from 'ember';

var inflector = Ember.Inflector.inflector;
inflector.irregular('genus', 'genera');

export default DS.Model.extend({
  genusName: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  deletedAt: DS.attr()
});
