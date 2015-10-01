import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  namespace: function() {
    return 'api/' + this.get('globals.genus');
  }.property(),

  host: function() {
    return this.get('globals.apiURL');
  }.property(),

  coalesceFindRequests: true,

  shouldReloadAll: function() {
    return true;
  },

  shouldBackgroundReloadRecord: function() {
    return false;
  }

});
