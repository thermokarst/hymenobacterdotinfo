import Ember from 'ember';

// This will be unneccesary when ember 2.0 lands
export function getProperty(params) {
  return Ember.get(params[0], params[1]);
}

export default Ember.HTMLBars.makeBoundHelper(getProperty);
