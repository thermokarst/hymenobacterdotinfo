import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'span',
  showConfirmDelete: false,

  actions: {
    initialClick: function() {
      this.set('showConfirmDelete', true);
    },

    cancelDelete: function() {
      this.set('showConfirmDelete', false);
    },

    confirmDelete: function() {
      this.attrs.delete();
    },
  },

});
