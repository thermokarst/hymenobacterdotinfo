import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service('session'),
  currentUser: Ember.inject.service('session-account'),

  beforeModel: function(transition) {
    this._super(transition);

    let token = Ember.get(transition, 'queryParams.token');
    this.get('session').authenticate('authenticator:jwt-resolved', token).then(() => {
      this.get('currentUser.account').then((account) => {
        this.transitionTo('protected.users.changepassword', account.get('id'));
      });
    });
  },

});
