import { hashContains } from 'dummy/helpers/hash-contains';
import { module, test } from 'qunit';

module('Unit | Helper | hash contains');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = hashContains([{foo:'bax'}, 'bax']);
  assert.ok(result);
});
