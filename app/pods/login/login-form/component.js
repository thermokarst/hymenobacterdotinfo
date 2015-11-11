import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  // Actions
  "on-submit": null,

  // Property mapping
  propertiesList: ['identification', 'password'],
  identification: null,
  password: null,

  actions: {
    submit: function() {
      return this.attrs['on-submit'](this.get('identification'), this.get('password'));
    },

    identificationDidChange: function(value) {
      this.set('identification', value);
    },

    passwordDidChange: function(value) {
      this.set('password', value);
    },
  },
});
