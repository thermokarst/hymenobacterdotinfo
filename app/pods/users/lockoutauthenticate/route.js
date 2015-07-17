import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    let token = Ember.get(transition, 'queryParams.token');
    this.get('session').authenticate('authenticator:jwt-resolved', token);
  },

});
