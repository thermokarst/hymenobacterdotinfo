import Ember from 'ember';

export default Ember.Controller.extend({
  sortParams: ['speciesName', 'strainCount'],
  sortedSpecies: Ember.computed.sort('model', 'sortParams'),
});
