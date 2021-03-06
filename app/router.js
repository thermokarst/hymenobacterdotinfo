import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('users', function() {
    this.route('requestlockouthelp');
    this.route('lockoutauthenticate');
    this.route('new', function() {
      this.route('verify', { path: 'verify/:nonce' });
    });
  });

  this.route('not-found', { path: '/*path' });

  this.route('protected', { path: '/' }, function() {
    this.route('about');

    this.route('users', function() {
      this.route('show', { path: ':user_id' });
      this.route('edit', { path: ':user_id/edit' });
      this.route('changepassword', { path: ':user_id/changepassword' });
    });

    this.route('compare', function() {
      this.route('results');
    });

    this.route('characteristics', function() {
      this.route('new');
      this.route('show', { path: ':characteristic_id' });
      this.route('edit', { path: ':characteristic_id/edit' });
    });

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
