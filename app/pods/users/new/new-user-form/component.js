import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  // Read-only attributes
  user: null,
  isLoading: null,

  // Actions
  "on-save": null,
  "on-cancel": null,

  // Property mapping
  propertiesList: ['name', 'email', 'password', 'passwordConfirm'],
  name: null,
  email: null,
  password: null,
  passwordConfirm: null,

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
      // All validation is server-side, except for password verification matching
      if (this.get('password') !== this.get('passwordConfirm')) {
        this.get('flashMessages').clearMessages();
        this.get('flashMessages').error("Password fields don't match");
        return;
      }

      return this.attrs['on-save'](this.getProperties(this.get('propertiesList')));
    },

    nameDidChange: function(value) {
      this.updateField('name', value);
    },

    emailDidChange: function(value) {
      this.updateField('email', value);
    },

    passwordDidChange: function(value) {
      this.updateField('password', value);
    },

    passwordConfirmDidChange: function(value) {
      this.updateField('passwordConfirm', value);
    }
  }
});
