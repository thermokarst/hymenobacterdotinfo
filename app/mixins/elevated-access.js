import Ember from 'ember';

const { Mixin , inject: { service } } = Ember;

export default Mixin.create({
  currentUser: service('session-account'),

  beforeModel: function(transition) {
    this._super(transition);
    this.get('currentUser.account').then((user) => {
      if (user.get('isReader')) {
        this.transitionTo(this.get('fallbackRouteBefore'));
      }
    });
  },

  afterModel: function(model) {
    if (!model.get('canEdit')) {
      this.transitionTo(this.get('fallbackRouteAfter'), model.get('id'));
    }
  },
});
