import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  password: null,
  passwordConfirm: null,
  matches: false,

  // Actions
  "on-save": null,
  "on-cancel": null,

  updateField: function(property, value) {
    this.set(property, value);
    this.verifyPassword(this.get('password'), this.get('passwordConfirm'));
  },

  verifyPassword: function(password, passwordConfirm) {
    if (password && passwordConfirm) {
      if (password !== passwordConfirm) {
        this.get('flashMessages').clearMessages();
        this.get('flashMessages').error("Password fields don't match");
        this.set('matches', false);
      } else {
        this.get('flashMessages').clearMessages();
        this.set('matches', true);
      }
    }
  },

  actions: {
    save: function() {
      this.verifyPassword(this.get('password'), this.get('passwordConfirm'));
      if (this.get('matches')) {
        return this.attrs['on-save'](this.get('password'));
      }
    },

    cancel: function() {
      return this.attrs['on-cancel']();
    },

    passwordDidChange: function(value) {
      this.updateField('password', value);
    },

    passwordConfirmDidChange: function(value) {
      this.updateField('passwordConfirm', value);
    },
  },
});
