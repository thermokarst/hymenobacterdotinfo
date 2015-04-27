import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: 'api/' + config.genus,
  host: config.apiURL,
  coalesceFindRequests: true,
  ajaxError: function(jqXHR) {
    // http://stackoverflow.com/a/24027443
    var error = this._super(jqXHR);
    if (jqXHR && jqXHR.status === 422) {
      var response = Ember.$.parseJSON(jqXHR.responseText),
        errors = {};
      if (response.errors !== undefined) {
        var jsonErrors = response.errors;
        Ember.EnumerableUtils.forEach(Ember.keys(jsonErrors), function(key) {
          errors[Ember.String.camelize(key)] = jsonErrors[key];
        });
      }
      return new DS.InvalidError(errors);
    } else {
      return error;
    }
  }
});
