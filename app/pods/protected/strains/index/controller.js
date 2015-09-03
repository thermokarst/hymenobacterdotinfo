import Ember from 'ember';

export default Ember.Controller.extend({
  sortParams: ['sortOrder'],
  sortedStrains: Ember.computed.sort('model', 'sortParams'),
});
