import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('users', function() {
    this.route('new', function() {
      this.route('fail');
      this.route('success');
      this.route('verify', { path: ':nonce' });
    });
  });

  this.route('protected', { path: '/' }, function() {
    this.route('about');
    this.route('characteristics');
    this.route('measurements');
    this.route('compare');

    this.route('species', function() {
      this.route('new');
      this.route('show', { path: ':species_id' });
      this.route('edit', { path: ':species_id/edit' });
    });

    this.route('strains', function() {
      this.route('new');
      this.route('show', { path: ':strain_id' });
      this.route('edit', { path: ':strain_id/edit' });
    });

  });

});

export default Router;
