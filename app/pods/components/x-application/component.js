import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["flakes-frame"],

  didInsertElement: function() {
    FlakesFrame.init();
  },

});
