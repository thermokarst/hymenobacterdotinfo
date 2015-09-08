import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    this._super(transition);
    if (this.get('session.currentUser.role') === 'R') {
      this.transitionTo('characteristics.index');
    }
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
