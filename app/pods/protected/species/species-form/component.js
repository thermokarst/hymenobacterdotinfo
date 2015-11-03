import Ember from 'ember';

const { Component, inject: { service } } = Ember;

export default Component.extend({
  currentUser: service('session-account'),

  species: null,
  "on-save": null,
  "on-cancel": null,

  setupMetaDataOnInit: Ember.on('init', function() {
    this.get('currentUser.account').then((user) => {
      this.set('metaData', user.get('metaData'));
    });
  }),

  actions: {
    save: function() {
      return this.attrs['on-save']();
    },

    cancel: function() {
      return this.attrs['on-cancel']();
    },
  }
});
