import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service('session-account'),

  isUser: Ember.computed('model.id', 'currentUser.account.id', function() {
    return this.get('model.id') === this.get('currentUser.account.id');
  }),
});
