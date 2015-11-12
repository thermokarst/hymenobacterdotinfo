import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  characteristics: null,
  strains: null,

  "on-search": null,

  selectedStrains: null,
  selectedCharacteristics: null,

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
      this.set('selectedStrains', strain_ids.join(","));
    },

    deselectAllStrains: function() {
      this.set('selectedStrains', '');
    },

    selectAllCharacteristics: function() {
      const chars = this.get('characteristics');
      const char_ids = [];
      chars.forEach((char) => {
        char_ids.push(char.get('id'));
      });
      this.set('selectedCharacteristics', char_ids.join(","));
    },

    deselectAllCharacteristics: function() {
      this.set('selectedCharacteristics', '');
    },
  },
});
