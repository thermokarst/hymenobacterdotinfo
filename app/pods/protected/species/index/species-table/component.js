import Ember from 'ember';

const { Component, inject: { service }} = Ember;

export default Component.extend({
  currentUser: service('session-account'),

  metaData: null,
  species: null,

  setupMetaDataOnInit: Ember.on('init', function() {
    this.get('currentUser.account').then((user) => {
      this.set('metaData', user.get('metaData'));
    });
  }),

  sortParams: ['speciesName', 'strainCount'],
  sortedSpecies: Ember.computed.sort('species', 'sortParams'),

});
