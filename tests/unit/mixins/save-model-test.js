import Ember from 'ember';
import SaveModelMixin from '../../../mixins/save-model';
import { module, test } from 'qunit';

module('Unit | Mixin | save model');

// Replace this with your real tests.
test('it works', function(assert) {
  var SaveModelObject = Ember.Object.extend(SaveModelMixin);
  var subject = SaveModelObject.create();
  assert.ok(subject);
});
