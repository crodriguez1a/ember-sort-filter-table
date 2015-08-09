import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

let model = {
  'last_name' : 'Billups',
  'first_name' : 'Chauncey',
  'display_name' : 'Chauncey Billups',
  'birthdate' : '1976-09-25',
  'age' : 37,
  'birthplace' : 'Denver, Colorado, USA',
  'height_in' : 75,
  'height_cm' : 190.5,
  'height_m' : 1.9,
  'height_formatted' : '6\'3\'',
  'weight_lb' : 202,
  'weight_kg' : 91.8,
  'position' : 'PG',
  'uniform_number' : 1
};

let privateProperties = {
  'last_name' : 'Billups',
  '_isVisible': false
};

moduleForComponent('each-keys', 'Integration | Component | each keys', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  this.set('model', model);
  this.render(hbs`
    {{component 'each-keys' object=model}}
  `);
  assert.equal(this.$().length, 1, 'It is in the DOM');
});

test('it doesn\'t include properties with underscore (private)', function(assert) {
  assert.expect(1);
  this.set('model', privateProperties);
  this.render(hbs`
    {{component 'each-keys' object=model}}
  `);
  assert.equal(this.$().length, 1, 'Only one of the two properties was added');
});
