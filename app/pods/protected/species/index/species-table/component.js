import Ember from 'ember';
import SetupMetaData from '../../../../../mixins/setup-metadata';

const { Component } = Ember;

export default Component.extend(SetupMetaData, {
  species: null,

  sortParams: ['speciesName', 'strainCount'],
  sortedSpecies: Ember.computed.sort('species', 'sortParams'),

});
