import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    this._super(transition);

    let token = Ember.get(transition, 'queryParams.token');
    this.get('session').authenticate('authenticator:jwt-resolved', token);
  },

});
