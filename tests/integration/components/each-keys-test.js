import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

let model = {
  "last_name" : "Billups",
  "first_name" : "Chauncey",
  "display_name" : "Chauncey Billups",
  "birthdate" : "1976-09-25",
  "age" : 37,
  "birthplace" : "Denver, Colorado, USA",
  "height_in" : 75,
  "height_cm" : 190.5,
  "height_m" : 1.9,
  "height_formatted" : "6'3\"",
  "weight_lb" : 202,
  "weight_kg" : 91.8,
  "position" : "PG",
  "uniform_number" : 1
};

moduleForComponent('each-keys', 'Integration | Component | each keys', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  assert.equal(this._state, 'preRender', 'It pre-rendered');
  this.set('model', model);
  this.render(`{{component "each-keys" object=model}}`);
  assert.equal(component._state, 'inDOM', 'It is in the DOM');
});
