import Ember from 'ember';
/* global FlakesFrame */

export default Ember.View.extend({
  classNames: ['flakes-frame'],
  didInsertElement: function() {
    FlakesFrame.init();
  }
});
