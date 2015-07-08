import Ember from 'ember';

export default Ember.Controller.extend({
  sortParams: ['fullNameMU', 'totalMeasurements'],
  sortedStrains: Ember.computed.sort('model', 'sortParams'),

  metaData: function() {
    return this.store.metadataFor('strain');
  }.property('model.isLoaded').readOnly(),

});
