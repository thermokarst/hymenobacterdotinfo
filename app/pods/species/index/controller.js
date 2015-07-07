import Ember from 'ember';

export default Ember.Controller.extend({
  sortParams: ['speciesName', 'strainCount'],
  sortedSpecies: Ember.computed.sort('species', 'sortParams'),

  metaData: function() {
    return this.store.metadataFor('species');
  }.property('model.isLoaded').readOnly(),

});
