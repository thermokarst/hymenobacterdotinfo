import Ember from 'ember';
import config from '../config/environment';

var globals = Ember.Object.extend({
  genus: config.APP.genus,
  apiURL: config.apiURL,
});

export function initialize(container, application) {
  application.register('service:globals', globals, {singleton: true});
  application.inject('route', 'globals', 'service:globals');
  application.inject('controller', 'globals', 'service:globals');
  application.inject('component', 'globals', 'service:globals');
  application.inject('adapter', 'globals', 'service:globals');
}

export default {
  name: 'global-variables',
  initialize: initialize
};
