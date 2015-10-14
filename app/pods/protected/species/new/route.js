import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    this._super(transition);
    this.get('session.currentUser').then((user) => {
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
      let controller = this.get('controller');
      let species = controller.get('model');

      if (species.get('isNew')) {
        species.deleteRecord();
      }
    },
  },

});
