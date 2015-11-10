import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const { Route, get, inject: { service } } = Ember;

export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),
  currentUser: service('session-account'),

  beforeModel: function(transition) {
    this._super(transition);

    const token = get(transition, 'queryParams.token');
    this.get('session').authenticate('authenticator:jwt-resolved', token).then(() => {
      this.get('currentUser.account').then((account) => {
        this.transitionTo('protected.users.changepassword', account.get('id'));
      });
    });
  },

});
