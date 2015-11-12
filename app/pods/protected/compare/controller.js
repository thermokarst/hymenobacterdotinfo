import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    search: function(query) {
      this.transitionToRoute('protected.compare.results', { queryParams: query });
    },
  }
});
