import Ember from 'ember';
/* global Quill */

export default Ember.Component.extend({
  quill: null,
  value: null,
  update: null,

  didInsertElement: function() {
    let quill = new Quill(`#${this.get('elementId')} .editor`, {
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
