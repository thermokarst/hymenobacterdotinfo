import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      strain: this.store.find('strain', params.strain_id),
      species: this.store.findAll('species')
    });
  }
});
