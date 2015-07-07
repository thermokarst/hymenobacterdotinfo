import Ember from 'ember';

export default Ember.Controller.extend({
  sortParams: ['characteristicType.characteristicTypeName', 'characteristicName'],
  sortedCharacteristics: Ember.computed.sort('characteristics', 'sortParams'),
});
