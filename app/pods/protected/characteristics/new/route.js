import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('session-account'),

  beforeModel: function(transition) {
    this._super(transition);
    this.get('currentUser.account').then((user) => {
      if (user.get('isReader')) {
        this.transitionTo('protected.characteristics.index');
      }
    });
  },

  model: function() {
    return this.store.createRecord('characteristic');
  },

  actions: {
    willTransition: function(/*transition*/) {
      let controller = this.get('controller');
      let characteristic = controller.get('model');

      if (characteristic.get('isNew')) {
        characteristic.deleteRecord();
      }
    },
  },

});
