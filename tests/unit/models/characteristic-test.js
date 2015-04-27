import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('characteristic', {
  // Specify the other units that are required for this test.
  needs: ['model:measurement', 'model:strain']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
