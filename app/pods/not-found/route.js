import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  redirect: function() {
    const url = this.router.location.formatURL('/not-found');

    if (window.location.pathname !== url) {
      this.transitionTo('/not-found');
    }
  }
});
