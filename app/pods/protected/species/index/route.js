import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('session-account'),

  model: function() {
    return this.store.findAll('species');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    this.get('currentUser.account').then((user) => {
      controller.set('metaData', user.get('metaData'));
    });
  },

});
