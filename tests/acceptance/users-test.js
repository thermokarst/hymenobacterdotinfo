import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { invalidateSession, authenticateSession } from '../helpers/ember-simple-auth';

module('Acceptance | users', {
  beforeEach: function() {
    this.application = startApp();
    authenticateSession(this.application, {
      access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiYWN0ZGIiLCJzdWIiOiIxIiwiZXhwIjoxNDQ2NTAyMjI2LCJpYXQiOjE0NDY0OTg2MjZ9.vIjKHAsp2TkCV505EbtCo2xQT-2oQkB-Nv5y0b6E7Mg"
    });
    server.create('users', { role: 'A', canEdit: true });
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /users', function(assert) {
  const users = server.createList('users', 19); // We already created one user in beforeEach
  visit('/users');

  andThen(function() {
    assert.equal(currentURL(), '/users');
    assert.equal(find(".flakes-table > tbody > tr").length, users.length + 1);
    assert.equal(find("#total-users").text(), "Total users: 20");
  });
});


test('visiting /users/:id', function(assert) {
  const user = server.create('users');
  visit(`/users/${user.id}`);

  andThen(function() {
    assert.equal(currentURL(), `/users/${user.id}`);
    assert.equal(find(".flakes-information-box > legend").text().trim(), user.name);
  });
});

test('editing /users/:id/edit', function(assert) {
  const user = server.create('users', { 'canEdit': true });
  visit(`/users/${user.id}/edit`);

  andThen(function() {
    assert.equal(currentURL(), `/users/${user.id}/edit`);

    fillIn('.user-name', 'Revised User Name');
    click('.save-user');

    andThen(function() {
      assert.equal(currentURL(), `/users/${user.id}`);
      assert.equal(find(".flakes-information-box > legend").text().trim(), 'Revised User Name');
    });
  });
});

test('creating /users/new', function(assert) {
  invalidateSession(this.application);
  visit(`/users/new`);

  andThen(function() {
    assert.equal(currentURL(), `/users/new`);
    fillIn('.user-name', 'New User Name');
    fillIn('.email', 'example@example.com');
    fillIn('.password', 'Password1');
    fillIn('.password-verify', 'Password1');
    click('.save-user');

    andThen(function() {
      assert.equal(currentURL(), `/login`);
      assert.equal(find(".flakes-message").text().trim(), `✖ You have successfully signed up.
              Please check your email for further instructions.`);
    });
  });
});
