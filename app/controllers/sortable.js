import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: true,
  sortBy: null, // Set in subclass
  // Make sortProperties computed so that we have a nice URL using sortBy
  sortProperties: Ember.computed('sortBy', function() {
    return [this.get('sortBy')];
  }),
  actions: {
    setSortBy: function(fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');
      return false;
    }
  }
});
