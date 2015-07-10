import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function() {
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
    willTransition: function(transition) {
      let controller = this.get('controller');
      let strain = controller.get('strain');

      if (strain.get('isNew')) {
        strain.deleteRecord();
      }
    },
  },

});
