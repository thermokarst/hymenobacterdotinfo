import Ember from 'ember';

export default Ember.Controller.extend({
  sortParams: ['fullNameMU', 'totalMeasurements'],
  sortedStrains: Ember.computed.sort('strains', 'sortParams'),
});
