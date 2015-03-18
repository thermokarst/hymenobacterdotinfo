import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.reopen({
  namespace: 'api/hymenobacter',
  host: config.apiURL
});
