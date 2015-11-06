import Ember from 'ember';

const { Component, computed, inject: { service } } = Ember;

export default Component.extend({
  currentUser: service('session-account'),

  isUser: computed('model.id', 'currentUser.account.id', function() {
    return this.get('model.id') === this.get('currentUser.account.id');
  }),
});
