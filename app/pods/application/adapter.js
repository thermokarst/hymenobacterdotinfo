import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const { RESTAdapter } = DS;

export default RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:application',

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
