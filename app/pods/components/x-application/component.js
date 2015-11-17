import Ember from 'ember';

const { Component, inject: { service } } = Ember;

export default Component.extend({
  classNames: ["flakes-frame"],

  session: service(),
  currentUser: service('session-account'),

  didInsertElement: function() {
    FlakesFrame.init();
  },

  actions: {
    invalidateSession: function() {
      this.sendAction('invalidateSession');
    },

  },

});
