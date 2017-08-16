import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { create } from 'ember-cli-page-object';
import demoNav from '../../pages/components/demo-nav';

const component = create(demoNav);

moduleForComponent('demo-nav', 'Integration | Component | demo nav', {
  integration: true,
  beforeEach() {
    component.setContext(this);
  },

  afterEach() {
    component.removeContext();
  }
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{demo-nav}}`);

  assert.equal(component.text, '');

  // Template block usage:
  this.render(hbs`
    {{#demo-nav}}
      template block text
    {{/demo-nav}}
  `);

  assert.equal(component.text, 'template block text');
});
