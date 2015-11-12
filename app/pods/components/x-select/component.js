import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'select',

  value: null,
  nameAttr: null,
  listItems: null,
  placeholder: null,
  selected: null,
  selectize: null,

  attributeBindings: [
    'multiple',
  ],

  change: function() {
    this.attrs["update"](this.get('selectize').getValue());
  },

  didReceiveAttrs: function() {
    this._super(...arguments);

    if (!this.attrs.update) {
      throw new Error(`You must provide an \`update\` action.`);
    }
  },

  didInsertElement: function() {
    this.$().selectize({
      plugins: ['drag_drop'],
      items: this.get('selected'),
    });
    this.set('selectize', this.$()[0].selectize);
  },

});
