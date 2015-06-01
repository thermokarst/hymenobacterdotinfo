import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('about');
  this.resource('strains', function() {
    this.route('new');
    this.route('show', { path: ':strain_id' }, function() {
      this.resource('measurements', function() {});
    });
  });
  this.resource('characteristics', function() {});
  this.resource('users', function() {});
});

export default Router;
