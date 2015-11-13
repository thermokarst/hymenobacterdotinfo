import Ember from 'ember';
/* global Quill */

const { Component } = Ember;

export default Component.extend({
  // Passed in
  value: null,

  // Internal
  quill: null,

  didReceiveAttrs() {
    this._super(...arguments);

    if (!this.attrs.update) {
      throw new Error(`You must provide an \`update\` action.`);
    }
  },

  didInsertElement: function() {
    const quill = new Quill(`#${this.get('elementId')} .editor`, {
      formats: ['bold', 'italic', 'underline'],
      modules: {
        'toolbar': { container: `#${this.get('elementId')} .toolbar` }
      },
      theme: 'snow'
    });

    let val = this.get('value');
    if (!val) {
      val = '';
    }
    quill.setHTML(val);

    quill.on('text-change', (delta, source) => {
      if (source === 'user') {
        this.attrs['update'](Ember.$(quill.getHTML()).html());
      }
    });

    this.set('quill', quill);
  },
});
