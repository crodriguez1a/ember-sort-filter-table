import { isPrivateKey } from 'dummy/helpers/is-private-key';
import { module, test } from 'qunit';

module('Unit | Helper | is private key');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = isPrivateKey(['_foo']);
  assert.ok(result);
});
