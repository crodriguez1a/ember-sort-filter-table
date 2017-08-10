import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sf-em-data', 'Integration | Component | sf em data', {
  integration: true
});


test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sf-em-data}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sf-em-data}}
      template block text
    {{/sf-em-data}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
