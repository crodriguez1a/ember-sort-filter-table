import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import page from '../../tests/pages/application';

moduleForAcceptance('Acceptance | general');

test('visiting various tabs', async function(assert) {
  await page.visit('/');
  // assert.equal(currentURL(), '/');
  // TODO click through implemenation tabs
  await page.demoNav.tabInline();
  assert.equal(currentURL(), '/?tab=inline', 'navigated to inline tab');

  await page.demoNav.tabBlock();
  assert.equal(currentURL(), '/?tab=block', 'navigated to block tab');

  await page.demoNav.tabData();
  assert.equal(currentURL(), '/?tab=emberData', 'navigated to emberData tab');
});
