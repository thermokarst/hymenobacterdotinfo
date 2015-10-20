import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('session-account'),

  beforeModel: function(transition) {
    this._super(transition);
    this.get('currentUser.account').then((user) => {
      if (user.get('isReader')) {
        this.transitionTo('protected.strains.index');
      }
    });
  },

  model: function(params) {
    return Ember.RSVP.hash({
      strain: this.store.find('strain', params.strain_id),
      species: this.store.findAll('species'), // Need for dropdown
    });
  },

  afterModel: function(models) {
    if (!models.strain.get('canEdit')) {
      this.transitionTo('strains.show', models.strain.get('id'));
    }
  },

  setupController: function(controller, models) {
    controller.setProperties(models);
    this.get('currentUser.account').then((user) => {
      controller.set('metaData', user.get('metaData'));
    });
  },

});
