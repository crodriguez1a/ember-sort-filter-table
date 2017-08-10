import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import DS from 'ember-data';

const {
  RecordArray
} = DS;

moduleForComponent('sf-em-data', 'Integration | Component | sf em data', {
  integration: true
});

// TODO test fix for #29

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

skip('it renders only the columns provided in the headings hash', function(assert) {
  this.model = new RecordArray([{ "title": 'hello', "name": "dude" }]);
  this.render(hbs`
    {{#sf-table class="is-striped" as | sf |}}
      {{sf.headings
        headings=(array
        (hash key="title" display="Title")
        )}}
      {{sf.data store=model}}
    {{/sf-table}}
  `);
  assert.equal(this.$().find('tbody td').text(), '', 'test');
  assert.equal(this.$().find('tbody td').length, 1, 'it only has one column');
});
