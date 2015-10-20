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

  afterModel: function(species) {
    if (!species.get('canEdit')) {
      this.transitionTo('species.show', species.get('id'));
    }
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    this.get('session.currentUser').then((user) => {
      controller.set('metaData', user.get('metaData'));
    });
  },

});
