import Ember from 'ember';

export default Ember.Controller.extend({
  sortParams: ['characteristicTypeName', 'sortOrder'],
  sortedCharacteristics: Ember.computed.sort('model', 'sortParams'),
});
