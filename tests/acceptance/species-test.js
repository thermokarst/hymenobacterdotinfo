import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { authenticateSession } from '../helpers/ember-simple-auth';

module('Acceptance | species', {
  beforeEach: function() {
    this.application = startApp();
    server.create('users', { role: 'A', canEdit: true, sub: 1 });
    authenticateSession(this.application, {
      access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiYWN0ZGIiLCJzdWIiOiIxIiwiZXhwIjoxNDQ2NTAyMjI2LCJpYXQiOjE0NDY0OTg2MjZ9.vIjKHAsp2TkCV505EbtCo2xQT-2oQkB-Nv5y0b6E7Mg"
    });
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /species', function(assert) {
  const species = server.createList('species', 20);
  visit('/species');

  andThen(function() {
    assert.equal(currentURL(), '/species');
    assert.equal(find(".flakes-table > tbody > tr").length, species.length);
    assert.equal(find("#total-species").text(), "Total species: 20");
  });
});

test('visiting /species/:id', function(assert) {
  const species = server.create('species');
  visit(`/species/${species.id}`);

  andThen(function() {
    assert.equal(currentURL(), `/species/${species.id}`);
    assert.equal(find(".flakes-information-box > legend > em").text().trim(), species.speciesName);
  });
});

test('editing /species/:id/edit', function(assert) {
  const species = server.create('species', { 'canEdit': true });
  visit(`/species/${species.id}/edit`);

  andThen(function() {
    assert.equal(currentURL(), `/species/${species.id}/edit`);

    fillIn('.species-name', 'Revised Species Name');
    click('.save-species');

    andThen(function() {
      assert.equal(currentURL(), `/species/${species.id}`);
      assert.equal(find(".flakes-information-box > legend > em").text().trim(), 'Revised Species Name');
    });
  });
});

test('creating /species/new', function(assert) {
  visit(`/species/new`);

  andThen(function() {
    assert.equal(currentURL(), `/species/new`);
    fillIn('.species-name', 'New Species Name');
    click('.save-species');

    andThen(function() {
      assert.equal(find(".flakes-information-box > legend > em").text().trim(), 'New Species Name');
      assert.equal(server.db.species.length, 1);
    });
  });
});

test('deleting /species/:id', function(assert) {
  const species = server.create('species', { 'canEdit': true });
  visit(`/species/${species.id}`);

  andThen(function() {
    assert.equal(currentURL(), `/species/${species.id}`);
    click('button.delete');

    andThen(function() {
      click('button.delete-confirm');

      andThen(function() {
        assert.equal(currentURL(), `/species`);
        assert.equal(server.db.species.length, 0);
      });
    });
  });
});
