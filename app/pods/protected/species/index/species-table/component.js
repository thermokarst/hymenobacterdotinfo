import Ember from 'ember';
import SetupMetaData from '../../../../../mixins/setup-metadata';

const { Component, computed: { sort } } = Ember;

export default Component.extend(SetupMetaData, {
  species: null,

  sortParams: ['sortOrder'],
  sortedSpecies: sort('species', 'sortParams'),

});
