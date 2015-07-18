import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['strain_ids', 'characteristic_ids'],

  csvLink: function() {
    let token = encodeURIComponent(this.get('session.secure.token'));
    return `${this.get('globals.apiURL')}/api/${this.get('globals.genus')}/` +
      `compare?token=${token}&strain_ids=${this.get('strain_ids')}&` +
      `characteristic_ids=${this.get('characteristic_ids')}&mimeType=csv`;
  }.property('strain_ids', 'characteristic_ids').readOnly(),

  strains: function() {
    let strains = [];
    let strain_ids = this.get('strain_ids').split(',');
    strain_ids.forEach((id) => {
      strains.push(this.store.peekRecord('strain', id));
    });
    return strains;
  }.property('strain_ids'),

  characteristics: function() {
    let characteristics = [];
    let characteristic_ids = this.get('characteristic_ids').split(',');
    characteristic_ids.forEach((id) => {
      characteristics.push(this.store.peekRecord('characteristic', id));
    });
    return characteristics;
  }.property('characteristic_ids'),

});
