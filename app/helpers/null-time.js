import Ember from 'ember';
import formatDate from '../utils/date-helpers';

export default Ember.Helper.helper(function(params) {
  let value = params[0],
    format = params[1];
  if (value == null) {
    return 'N/A';
  }
  return formatDate(value, format);
});
