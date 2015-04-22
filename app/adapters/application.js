import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: 'api/' + config.genus,
  host: config.apiURL,
  coalesceFindRequests: true,
});
