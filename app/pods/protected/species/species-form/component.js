import Ember from 'ember';

const { Component, inject: { service } } = Ember;

export default Component.extend({
  currentUser: service('session-account'),

  species: null,
  "on-save": null,
  "on-cancel": null,
  "on-update": null,

  speciesName: null,
  typeSpecies: null,

  updateField: function(property, value) {
    this.set(property, value);
  },

  resetOnInit: Ember.on('init', function() {
    ['speciesName', 'typeSpecies'].forEach((field) => {
      const valueInSpecies = this.get('species').get(field);
      this.set(field, valueInSpecies);
    });
  }),

  setupMetaDataOnInit: Ember.on('init', function() {
    this.get('currentUser.account').then((user) => {
      this.set('metaData', user.get('metaData'));
    });
  }),

  actions: {
    save: function() {
      return this.attrs['on-save'](this.getProperties(['speciesName', 'typeSpecies']));
    },

    cancel: function() {
      return this.attrs['on-cancel']();
    },

    nameDidChange: function(value) {
      this.updateField('speciesName', value);
    },

    typeSpeciesDidChange: function() {
      this.toggleProperty('typeSpecies');
      console.log(this.get('typeSpecies'));
    },
  },
});
