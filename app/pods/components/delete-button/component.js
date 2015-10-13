import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ["button-red", "smaller"],

  click: function() {
    if (window.confirm("Do you really want to delete this?")) {
      this.attrs.delete();
    }
  },

});
