import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('strain', {
  // Specify the other units that are required for this test.
  needs: ['model:measurement', 'model:characteristic', 'model:species']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
