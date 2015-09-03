import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function() {
      let query = {
        strain_ids: this.get('selectedStrains'),
        characteristic_ids: this.get('selectedCharacteristics'),
      };

      this.transitionToRoute('protected.compare.results', {queryParams: query});
    },

    selectAllStrains: function() {
      let strains = this.get('strains');
      let strain_ids = [];
      strains.forEach((strain) => {
        strain_ids.push(strain.id);
      });
      this.set('selectedStrains', strain_ids.join(","));
    },

    deselectAllStrains: function() {
      this.set('selectedStrains', '');
    },

    selectAllCharacteristics: function() {
      let chars = this.get('characteristics');
      let char_ids = [];
      chars.forEach((char) => {
        char_ids.push(char.id);
      });
      this.set('selectedCharacteristics', char_ids.join(","));
    },

    deselectAllCharacteristics: function() {
      this.set('selectedCharacteristics', '');
    },

  }
});
