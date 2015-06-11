import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: function() {
    return this.get('globals.apiURL');
  }.property(),
  coalesceFindRequests: true,
});
