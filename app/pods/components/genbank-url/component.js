import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['href', 'target'],
  href: function() {
    return 'http://www.ncbi.nlm.nih.gov/nucleotide/' + this.get('genbank');
  }.property(),
  target: '_blank',
});
