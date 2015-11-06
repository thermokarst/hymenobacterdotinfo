import Ember from 'ember';

const { Helper: { helper } } = Ember;

export function equalHelper(params) {
  return params[0] === params[1];
}

export default helper(equalHelper);
