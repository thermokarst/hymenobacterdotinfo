import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('about');
  this.resource('genera');
  this.resource('species');
  this.resource('strains');
  this.resource('strain', { path: '/strain/:strain_id' }, function() {
    this.resource('measurements');
  });
  this.resource('measurement', { path: '/measurement/:measurement_id' });
});

export default Router;
