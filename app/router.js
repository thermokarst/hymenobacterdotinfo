import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('about');
  this.resource('strains', function() {
    this.route('show', { path: ':strain_id' });
  });
});

export default Router;
