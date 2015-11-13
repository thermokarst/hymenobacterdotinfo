import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

const { computed, inject: { service } } = Ember;

export default AjaxService.extend({
  session: service(),
  globals: service(),

  host: computed('globals.apiURL', function() {
    return `${this.get('globals.apiURL')}/api/${this.get('globals.genus')}`;
  }),

  headers: computed('session.authToken', {
    get: function() {
      let headers = {};
      this.get('session').authorize('authorizer:application', (headerName, headerValue) => {
        headers[headerName] = headerValue;
      });
      return headers;
    }
  })
});
