import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["flakes-frame"],

  session: Ember.inject.service('session'),
  currentUser: Ember.inject.service('session-account'),

  didInsertElement: function() {
    FlakesFrame.init();
  },

  actions: {
    invalidateSession: function() {
      this.sendAction('invalidateSession');
    },

  },

});
