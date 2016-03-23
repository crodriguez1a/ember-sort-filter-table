import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sf-table', 'Integration | Component | sf table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sf-table}}`);

  assert.equal(this.$('.no-data-provided').length, 1);

  // Template block usage:
  this.render(hbs`
    {{#sf-table}}
      template block text
    {{/sf-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
