import Ember from 'ember';

const { Component, isEmpty } = Ember;

export default Component.extend({
  tagName: 'select',

  nameAttr: null,
  listItems: null,
  placeholder: null,
  selected: null,
  selectize: null,
  multiple: false,

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
    this._super(...arguments);

    this.$().selectize({
      closeAfterSelect: true,
      selectOnTab: true,
      plugins: ['drag_drop'],
      items: this.get('selected'),
    });

    this.set('selectize', this.$()[0].selectize);
  },

  didRender: function() {
    this._super(...arguments);

    const selected = this.get('selected');
    if (!isEmpty(selected)) {
      this.get('selected').forEach((item) => {
        this.get('selectize').addItem(item, true);
      });
    } else {
      this.get('selectize').clear(true);
    }
  },

});
