import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { authenticateSession } from '../helpers/ember-simple-auth';

module('Acceptance | strains', {
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

test('visiting /strains', function(assert) {
  const species = server.create('species');
  const strains = server.createList('strains', 20, { species: species.id });
  visit('/strains');

  andThen(function() {
    assert.equal(currentURL(), '/strains');
    assert.equal(find(".flakes-table > tbody > tr").length, strains.length);
    assert.equal(find("#total-strains").text(), "Total strains: 20");
  });
});

test('visiting /strains/:id', function(assert) {
  const species = server.create('species');
  const strain = server.create('strains', { species: species.id });
  visit(`/strains/${strain.id}`);

  andThen(function() {
    assert.equal(currentURL(), `/strains/${strain.id}`);
    const typeStrain = strain.typeStrain ? 'T' : '';
    assert.equal(find(".flakes-information-box > legend").text().trim(), `${strain.strainName}${typeStrain}`);
  });
});

test('editing /strains/:id/edit', function(assert) {
  const species = server.create('species');
  const strain = server.create('strains', { canEdit: true , species: species.id });
  visit(`/strains/${strain.id}/edit`);

  andThen(function() {
    assert.equal(currentURL(), `/strains/${strain.id}/edit`);

    fillIn('.strain-name', 'Revised Strain Name');
    click('.save-strain');

    andThen(function() {
      assert.equal(currentURL(), `/strains/${strain.id}`);
      const typeStrain = strain.typeStrain ? 'T' : '';
      assert.equal(find(".flakes-information-box > legend").text().trim(), `Revised Strain Name${typeStrain}`);
    });
  });
});

test('creating /strains/new', function(assert) {
  visit(`/strains/new`);

  andThen(function() {
    assert.equal(currentURL(), `/strains/new`);
    fillIn('.strain-name', 'New Strain Name');
    click('.save-strain');

    andThen(function() {
      assert.equal(find(".flakes-information-box > legend").text().trim(), `New Strain Name`);
      assert.equal(server.db.strains.length, 1);
    });
  });
});
