import Ember from 'ember';

const { Component, computed, inject: { service } } = Ember;

export default Component.extend({
  currentUser: service('session-account'),

  user: null,

  isUser: computed('user.id', 'currentUser.account.id', function() {
    return this.get('user.id') === this.get('currentUser.account.id');
  }),
});
