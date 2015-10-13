import Ember from 'ember';

export function initialize(container, application) {
  application.inject('session:custom', '_store', 'service:store');
}

export default {
  name: 'custom-session',
  after: 'ember-data',
  initialize: initialize
};
