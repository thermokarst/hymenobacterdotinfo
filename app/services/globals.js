import Ember from 'ember';
import config from '../config/environment';

const { Service } = Ember;

export default Service.extend({
  genus: config.APP.genus,
  apiURL: config.apiURL,
});
