import { isObject } from 'dummy/helpers/is-object';
import { module, test } from 'qunit';

module('Unit | Helper | is object');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = isObject([{'blue':42}]);
  assert.ok(result);
});
