import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['flakes-frame'],
  didInsertElement: function() {
    FlakesFrame.init();
  }
});
