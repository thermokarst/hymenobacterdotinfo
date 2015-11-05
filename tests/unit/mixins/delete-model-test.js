import Ember from 'ember';
import DeleteModelMixin from '../../../mixins/delete-model';
import { module, test } from 'qunit';

module('Unit | Mixin | delete model');

// Replace this with your real tests.
test('it works', function(assert) {
  var DeleteModelObject = Ember.Object.extend(DeleteModelMixin);
  var subject = DeleteModelObject.create();
  assert.ok(subject);
});
