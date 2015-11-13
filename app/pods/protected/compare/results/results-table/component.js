import Ember from 'ember';

const { Component, computed, inject: { service } } = Ember;

export default Component.extend({
  session: service(),

  strains: null,
  characteristics: null,
  strain_ids: null,
  characteristic_ids: null,

  csvLink: computed('strain_ids', 'characteristic_ids', function() {
    const token = encodeURIComponent(this.get('session.data.authenticated.access_token'));
    return `${this.get('globals.apiURL')}/api/${this.get('globals.genus')}/` +
      `compare?token=${token}&strain_ids=${this.get('strain_ids')}&` +
      `characteristic_ids=${this.get('characteristic_ids')}&mimeType=csv`;
  }),
});
