import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import Ember from 'ember';

const { inject: { service } } = Ember;
const { RESTAdapter } = DS;

export default RESTAdapter.extend(DataAdapterMixin, {
  globals: service(),

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
