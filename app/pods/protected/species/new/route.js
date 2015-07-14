import Ember from 'ember';

export default Ember.Route.extend({
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
    willTransition: function(/*transition*/) {
      let controller = this.get('controller');
      let species = controller.get('model');

      if (species.get('isNew')) {
        species.deleteRecord();
      }
    },
  },

});
