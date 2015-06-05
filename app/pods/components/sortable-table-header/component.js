import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'th',
  upArrow: '&#9650',
  downArrow: '&#9660',

  actions: {
    sortBy: function(sortProperty, ascending) {
      this.sendAction('action', sortProperty, ascending);
    }
  },
});
