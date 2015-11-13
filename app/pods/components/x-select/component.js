import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'select',
  attributeBindings: [
    'multiple',
  ],

  options: null,
  selected: null,
  nameAttr: null,

  change: function() {
    this.attrs.update(this.$().select2('val'));
  },

  didInsertElement: function() {
    if (this.get('placeholder')) {
      this.$().select2({
        placeholder: this.get('placeholder'),
      });
    } else {
      this.$().select2();
    }
  },

  didRender: function() {
    Ember.run.schedule('afterRender', this, function() {
      this.$().select2('val', this.get('selected'));
    });
  },

});
