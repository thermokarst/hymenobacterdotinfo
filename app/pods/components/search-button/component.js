import Ember from 'ember';

export default Ember.Component.extend({
  isLoading: false,
  buttonText: 'Search',
  actions: {
    showLoading: function() {
      if (!this.get('isLoading')) {
        this.sendAction('action');
      }
    }
  }
});
