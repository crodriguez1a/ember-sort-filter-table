import { moduleForComponent, test } from 'ember-qunit';

let component;
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

moduleForComponent('each-keys', {
  unit: true
});

moduleForComponent('each-keys', 'Unit | Component | each keys', {
  unit: true,
  beforeEach: function() {
    component = this.subject({
      object: model
    });
  }
});

test('it renders', function(assert) {
  assert.expect(2);

  assert.equal(component._state, 'preRender', 'It pre-rendered');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM', 'It is in the DOM');
});
