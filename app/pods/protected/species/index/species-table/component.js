import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service('session-account'),

  metaData: null,

  setupMetaDataOnInit: Ember.on('init', function() {
    this.get('currentUser.account').then((user) => {
      this.set('metaData', user.get('metaData'));
    });
  }),

  sortParams: ['speciesName', 'strainCount'],
  sortedSpecies: Ember.computed.sort('species', 'sortParams'),

});
