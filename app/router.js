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
  this.resource('measurements');
});

export default Router;
