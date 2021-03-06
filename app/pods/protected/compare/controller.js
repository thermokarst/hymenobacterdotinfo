import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  selectedStrains: [],
  selectedCharacteristics: [],

  actions: {
    search: function(query) {
      this.transitionToRoute('protected.compare.results', { queryParams: query });
    },

    updateStrainSelection: function(selection) {
      this.set('selectedStrains', selection);
    },

    updateCharacteristicSelection: function(selection) {
      this.set('selectedCharacteristics', selection);
    },
  }
});
