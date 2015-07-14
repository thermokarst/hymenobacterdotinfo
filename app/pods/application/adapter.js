import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  namespace: function() {
    return 'api/' + this.get('globals.genus');
  }.property(),

  host: function() {
    return this.get('globals.apiURL');
  }.property(),

  coalesceFindRequests: true,

  ajaxError: function(jqXHR) {
    // http://stackoverflow.com/a/24027443
    var error = this._super(jqXHR);
    if (jqXHR && jqXHR.status === 422) {
      var response = Ember.$.parseJSON(jqXHR.responseText),
        errors = {};
      if (response.errors !== undefined) {
        var jsonErrors = response.errors;
        Ember.EnumerableUtils.forEach(Object.keys(jsonErrors), function(key) {
          errors[Ember.String.camelize(key)] = jsonErrors[key];
        });
      }
      return new DS.InvalidError(errors);
    } else {
      return error;
    }
  },
});
