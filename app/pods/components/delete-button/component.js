import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ["button-red", "smaller", "delete"],
  showConfirmDelete: false,

  click: function() {
    if (!this.get('showConfirmDelete')) {
      this.set('showConfirmDelete', true);
    } else {
      this.attrs.delete();
    }
  },

});
