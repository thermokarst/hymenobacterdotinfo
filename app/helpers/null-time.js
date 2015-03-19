import Ember from 'ember';
import { formatDate } from '../utils/date-helpers';

export default Ember.Handlebars.makeBoundHelper(function(value, format) {
  if (value == null) {
    return 'N/A';
  }
  return formatDate(value, format);
});
