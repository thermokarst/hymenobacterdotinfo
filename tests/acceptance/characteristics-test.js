import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { authenticateSession } from '../helpers/ember-simple-auth';

module('Acceptance | characteristics', {
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

test('visiting /characteristics', function(assert) {
  const characteristics = server.createList('characteristics', 20);
  visit('/characteristics');

  andThen(function() {
    assert.equal(currentURL(), '/characteristics');
    assert.equal(find(".flakes-table > tbody > tr").length, characteristics.length);
    assert.equal(find("#total-characteristics").text(), "Total characteristics: 20");
  });
});


test('visiting /characteristics/:id', function(assert) {
  const characteristic = server.create('characteristics');
  visit(`/characteristics/${characteristic.id}`);

  andThen(function() {
    assert.equal(currentURL(), `/characteristics/${characteristic.id}`);
    assert.equal(find(".flakes-information-box > legend").text().trim(), characteristic.characteristicName);
  });
});

test('editing /characteristics/:id/edit', function(assert) {
  const characteristic = server.create('characteristics', { 'canEdit': true });
  visit(`/characteristics/${characteristic.id}/edit`);

  andThen(function() {
    assert.equal(currentURL(), `/characteristics/${characteristic.id}/edit`);

    fillIn('.characteristic-name', 'Revised Characteristic Name');
    click('.save-characteristic');

    andThen(function() {
      assert.equal(currentURL(), `/characteristics/${characteristic.id}`);
      assert.equal(find(".flakes-information-box > legend").text().trim(), 'Revised Characteristic Name');
    });
  });
});

test('creating /characteristics/new', function(assert) {
  visit(`/characteristics/new`);

  andThen(function() {
    assert.equal(currentURL(), `/characteristics/new`);
    fillIn('.characteristic-name', 'New Characteristic Name');
    click('.save-characteristic');

    andThen(function() {
      assert.equal(find(".flakes-information-box > legend").text().trim(), 'New Characteristic Name');
    });
  });
});
