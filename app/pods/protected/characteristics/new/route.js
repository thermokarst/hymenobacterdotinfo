import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    this._super(transition);
    this.get('session.currentUser').then((user) => {
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
