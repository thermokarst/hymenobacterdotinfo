import Ember from 'ember';
import SetupMetaData from '../../../../../mixins/setup-metadata';

const { Component, computed: { sort } } = Ember;

export default Component.extend(SetupMetaData, {
  strains: null,

  sortParams: ['fullName'],
  sortedStrains: sort('strains', 'sortParams'),

});
