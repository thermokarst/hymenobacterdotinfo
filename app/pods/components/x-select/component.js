import Ember from 'ember';

const { Component, get, run: { schedule } } = Ember;

export default Component.extend({
  tagName: 'select',
  attributeBindings: [
    'multiple',
  ],

  options: null,
  selected: null,
  nameAttr: null,
  placeholder: null,

  change: function() {
    let selectedInComponent = this.get('selected');
    let selectedInWidget = this.$().val();

    if (this.get('multiple')) {
      if (selectedInWidget === null) {
        selectedInWidget = [];
      }
      selectedInComponent = selectedInComponent.toString();
      selectedInWidget = selectedInWidget.toString();
    }

    // We need this to prevent an infinite loop of afterRender -> change.
    if (selectedInComponent !== selectedInWidget) {
      this.attrs.update(this.$().val());
    }
  },

  didInsertElement: function() {
    let options = {};
    options.placeholder = this.get('placeholder');
    options.templateResult = function(item) {
      if (!item.disabled) {
        const text = get(item, 'element.innerHTML');
        const $item = Ember.$(`<span>${text}</span>`);
        return $item;
      }
    };
    this.$().select2(options);
  },

  didRender: function() {
    const selected = this.get('selected');
    schedule('afterRender', this, function() {
      this.$().val(selected).trigger('change');
    });
  },

});
