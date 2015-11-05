import Ember from 'ember';
import SetupMetaData from '../../../../../mixins/setup-metadata';

const { Component } = Ember;

export default Component.extend(SetupMetaData, {
  characteristics: null,

  sortParams: ['characteristicTypeName', 'sortOrder', 'characteristicName'],
  sortedCharacteristics: Ember.computed.sort('characteristics', 'sortParams'),

});
