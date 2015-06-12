import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'em',
  genus: function() {
    return this.get('globals.genus').capitalize();
  }.property().readOnly(),
});
