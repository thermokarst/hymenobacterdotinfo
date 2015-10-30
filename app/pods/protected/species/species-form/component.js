import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  species: null,

  actions: {
    save: function() {
      this.sendAction('save');
    },

    cancel: function() {
      this.sendAction('cancel');
    },
  }
});
