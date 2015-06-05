import Ember from 'ember';

export default Ember.Component.extend(Ember.SortableMixin, {
  tagName: 'table',
  classNames: ['flakes-table'],

  actions: {
    sortBy: function(property, ascending) {
      this.set('sortAscending', ascending);
      this.set('sortProperties', [property]);
    }
  },
});
