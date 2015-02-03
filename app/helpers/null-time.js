import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value, options) {
  if (value == null) {
    return 'N/A';
  }
  return value;
});
