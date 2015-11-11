import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  strain: null,
  "on-delete": null,

  actions: {
    deleteStrain: function() {
      return this.attrs['on-delete']();
    },
  },
});
