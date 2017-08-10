import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | general');

test('visiting /', async function(assert) {
  await visit('/');
  assert.equal(currentURL(), '/');
  // TODO click through implemenation tabs
});
