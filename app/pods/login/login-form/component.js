import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  // Actions
  "on-save": null,
  "on-cancel": null,
  "on-update": null,
  "add-characteristic": null,
  "save-measurement": null,
  "delete-measurement": null,

  // Property mapping
  propertiesList: ['identification', 'password'],
  identification: null,
  password: null,

  updateField: function(property, value) {
    this.set(property, value);
  },
});
