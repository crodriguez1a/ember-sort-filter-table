import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sf-table', 'Integration | Component | sf table', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{sf-table}}`);

  assert.ok(this.$().text().indexOf('Empty'));

  //no block test since this only serves as an alias for nomanclature
});
