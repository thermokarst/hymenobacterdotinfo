import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  species: null,
  "on-delete": null,

  actions: {
    deleteSpecies: function() {
      return this.attrs['on-delete']();
    },
  },
});
