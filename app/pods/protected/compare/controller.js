import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  selectedStrains: null,
  selectedCharacteristics: null,

  actions: {
    search: function(query) {
      this.transitionToRoute('protected.compare.results', { queryParams: query });
    },

    updateStrainSelection: function(selection) {
      console.log(selection);
      this.set('selectedStrains', selection);
    },

    updateCharacteristicSelection: function(selection) {
      console.log(selection);
      this.set('selectedCharacteristics', selection);
    },
  }
});
