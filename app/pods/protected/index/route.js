import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  beforeModel: function(transition) {
    this._super(transition);
    this.transitionTo('protected.compare');
  }
});
