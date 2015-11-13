import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  characteristics: null,
  strains: null,

  "on-search": null,
  "update-strains": null,
  "update-characteristics": null,

  selectedStrains: [],
  selectedCharacteristics: [],

  updateStrains: function(selection) {
    this.set('selectedStrains', selection);
    this.attrs['update-strains'](this.get('selectedStrains'));
  },

  updateCharacteristics: function(selection) {
    this.set('selectedCharacteristics', selection);
    this.attrs['update-characteristics'](this.get('selectedCharacteristics'));
  },

  actions: {
    search: function() {
      const query = {
        strain_ids: this.get('selectedStrains'),
        characteristic_ids: this.get('selectedCharacteristics'),
      };
      this.attrs['on-search'](query);
    },

    selectAllStrains: function() {
      const strains = this.get('strains');
      const strain_ids = [];
      strains.forEach((strain) => {
        strain_ids.push(strain.get('id'));
      });
      this.updateStrains(strain_ids);
    },

    deselectAllStrains: function() {
      this.updateStrains([]);
    },

    selectAllCharacteristics: function() {
      const chars = this.get('characteristics');
      const char_ids = [];
      chars.forEach((char) => {
        char_ids.push(char.get('id'));
      });
      this.updateCharacteristics(char_ids);
    },

    deselectAllCharacteristics: function() {
      this.updateCharacteristics([]);
    },

    updateStrainSelection: function(selection) {
      this.updateStrains(selection);
    },

    updateCharacteristicsSelection: function(selection) {
      this.updateCharacteristics(selection);
    },
  },
});
