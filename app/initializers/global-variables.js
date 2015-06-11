import Ember from 'ember';
import config from '../config/environment';

var globals = Ember.Object.extend({
  genus: config.genus,
  apiURL: config.apiURL,
});

export function initialize(container, application) {
  application.register('global:variables', globals, {singleton: true});
  application.inject('controller', 'globals', 'global:variables');
  application.inject('component', 'globals', 'global:variables');
  application.inject('adapter', 'globals', 'global:variables');
}

export default {
  name: 'global-variables',
  initialize: initialize
};
