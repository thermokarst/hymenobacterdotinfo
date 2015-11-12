import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { Route } = Ember;

export default Route.extend(AuthenticatedRouteMixin, {
  actions: {
    error: function(err) {
      console.log(err);
      this.transitionTo('/not-found');
    },

  },

});
