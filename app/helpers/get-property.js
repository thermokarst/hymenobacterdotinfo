import Ember from 'ember';

const { get, Helper: { helper } } = Ember;

// This will be unneccesary when ember 2.0 lands
export default helper(function(params) {
  return get(params[0], params[1]);
});
