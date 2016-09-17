import { arrayQuery } from 'dummy/helpers/array-query';
import { module, test } from 'qunit';

module('Unit | Helper | array query');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = arrayQuery([{foo:'bax'}, 'bax']);
  assert.ok(result);
});
