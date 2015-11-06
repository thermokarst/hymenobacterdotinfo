import Ember from 'ember';
import SetupMetaData from '../../../../mixins/setup-metadata';

const { Component } = Ember;

export default Component.extend(SetupMetaData, {
  // Read-only attributes
  user: null,
  isDirty: false,
  roles: Ember.String.w('A R W'),

  // Actions
  "on-save": null,
  "on-cancel": null,
  "on-update": null,

  // Property mapping
  propertiesList: ['name', 'email', 'role'],
  name: null,
  email: null,
  role: null,

  resetOnInit: Ember.on('init', function() {
    this.get('propertiesList').forEach((field) => {
      const valueInUser = this.get('user').get(field);
      this.set(field, valueInUser);
    });
  }),

  updateField: function(property, value) {
    this.set(property, value);
    // Manually compare against passed in value
    if (this.get('user').get(property) !== value) {
      this.set('isDirty', true);
    } else {
      this.set('isDirty', false);
    }
  },

  actions: {
    save: function() {
      return this.attrs['on-save'](this.getProperties(this.get('propertiesList')));
    },

    cancel: function() {
      return this.attrs['on-cancel']();
    },

    nameDidChange: function(value) {
      this.updateField('name', value);
    },

    emailDidChange: function(value) {
      this.updateField('email', value);
    },

    roleDidChange: function(value) {
      this.updateField('role', value);
    },
  },
});
