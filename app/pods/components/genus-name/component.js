import Ember from 'ember';

const { Component, computed, inject: { service } } = Ember;

export default Component.extend({
  globals: service(),

  tagName: 'em',

  genus: computed('globals.genus', function() {
    return this.get('globals.genus').capitalize();
  }),

});
