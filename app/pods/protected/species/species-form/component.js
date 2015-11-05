import Ember from 'ember';

const { Component, inject: { service } } = Ember;

export default Component.extend({
  currentUser: service('session-account'),

  // Read-only attributes
  species: null,
  isNew: null,
  isDirty: false,

  // Actions
  "on-save": null,
  "on-cancel": null,
  "on-update": null,

  // Property mapping
  propertiesList: ['speciesName', 'typeSpecies', 'strains', 'etymology'],
  speciesName: null,
  typeSpecies: null,
  strains: null,
  etymology: null,

  resetOnInit: Ember.on('init', function() {
    this.get('propertiesList').forEach((field) => {
      const valueInSpecies = this.get('species').get(field);
      this.set(field, valueInSpecies);
    });
    // Read-only attributes
    this.set('isNew', this.get('species.isNew'));
  }),

  setupMetaDataOnInit: Ember.on('init', function() {
    this.get('currentUser.account').then((user) => {
      this.set('metaData', user.get('metaData'));
    });
  }),

  updateField: function(property, value) {
    this.set(property, value);
    // Manually compare against passed in value
    if (this.get('species').get(property) !== value) {
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

    speciesNameDidChange: function(value) {
      this.updateField('speciesName', value);
    },

    typeSpeciesDidChange: function() {
      this.updateField('typeSpecies', !this.get('typeSpecies'));
    },

    etymologyDidChange: function(value) {
      this.updateField('etymology', value);
    },
  },
});
