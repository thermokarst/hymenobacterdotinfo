import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  characteristic: null,
  "on-delete": null,

  actions: {
    deleteCharacteristic: function() {
      return this.attrs['on-delete']();
    },
  },
});
