import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  email: null,
  "on-submit": null,

  actions: {
    save: function() {
      return this.attrs["on-submit"](this.get('email'));
    },

    emailDidChange: function(value) {
      this.set('email', value);
    },
  }
});
