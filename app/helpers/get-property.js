import Ember from 'ember';

const { get, Helper: { helper } } = Ember;

export default helper(function(params) {
  return get(params[0], params[1]);
});
