import Ember from 'ember';

export default Ember.Controller.extend({
  sortParams: ['characteristicType.characteristicTypeName', 'sortOrder'],
  sortedCharacteristics: Ember.computed.sort('characteristics', 'sortParams'),
});
