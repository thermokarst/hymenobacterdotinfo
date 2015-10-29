import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('session-account'),

  beforeModel: function(transition) {
    this._super(transition);
    this.get('currentUser.account').then((user) => {
      if (user.get('isReader')) {
        this.transitionTo('protected.species.index');
      }
    });
  },

  model: function() {
    return this.store.createRecord('species');
  },

  actions: {
    willTransition: function(/*transition*/) {
      const controller = this.get('controller');
      const species = controller.get('model');

      if (species.get('isNew')) {
        species.destroyRecord();
      }
    },
  },

});
