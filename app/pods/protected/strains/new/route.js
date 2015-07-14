import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    this._super(transition);
    if (this.get('session.currentUser.role') === 'R') {
      this.transitionTo('strains.index');
    }
  },

  model: function() {
    return Ember.RSVP.hash({
      strain: this.store.createRecord('strain'),
      species: this.store.findAll('species'), // Need for dropdown
    });
  },

  setupController: function(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    willTransition: function(/*transition*/) {
      let controller = this.get('controller');
      let strain = controller.get('strain');

      if (strain.get('isNew')) {
        strain.deleteRecord();
      }
    },
  },

});
