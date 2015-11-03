import Ember from 'ember';
import ElevatedAccessMixin from '../../../mixins/elevated-access';
import { module, test } from 'qunit';

module('Unit | Mixin | elevated access');

// Replace this with your real tests.
test('it works', function(assert) {
  var ElevatedAccessObject = Ember.Object.extend(ElevatedAccessMixin);
  var subject = ElevatedAccessObject.create();
  assert.ok(subject);
});
