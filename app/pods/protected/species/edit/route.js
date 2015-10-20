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

  afterModel: function(species) {
    if (!species.get('canEdit')) {
      this.transitionTo('species.show', species.get('id'));
    }
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    this.get('currentUser.account').then((user) => {
      controller.set('metaData', user.get('metaData'));
    });
  },

});
