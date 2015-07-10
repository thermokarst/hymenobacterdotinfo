import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {
    this._super(transition);
    if (this.get('session.currentUser.role') === 'R') {
      this.transitionTo('species.index');
    }
  },

  model: function() {
    return this.store.createRecord('species');
  },

  actions: {
    willTransition: function(transition) {
      let controller = this.get('controller');
      let species = controller.get('model');

      if (species.get('isNew')) {
        species.deleteRecord();
      }
    },
  },

});
