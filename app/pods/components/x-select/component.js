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
    this.attrs["update"](this.$()[0].selectize.getValue());
  },

  didReceiveAttrs: function() {
    this._super(...arguments);
    console.log('didReceiveAttrs');

    if (!this.attrs.update) {
      throw new Error(`You must provide an \`update\` action.`);
    }

    Ember.run.schedule('actions', this, () => {
      console.log('before adding');
      this.$()[0].selectize.setValue(this.get('selected'), true);
      console.log('after adding')
    });
  },

  didInsertElement: function() {
    console.log('didInsertElement');
    const options = {
      closeAfterSelect: true,
      selectOnTab: true,
      plugins: ['drag_drop'],
      items: this.get('selected'),
    }

    this.$().selectize(options);
  },

});
