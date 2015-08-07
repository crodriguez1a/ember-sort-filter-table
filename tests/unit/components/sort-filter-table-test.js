import { moduleForComponent, test } from 'ember-qunit';

let component;
let data = {
    rows: [ {
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
    }, {
      "last_name" : "Bynum",
      "first_name" : "William",
      "display_name" : "Will Bynum",
      "birthdate" : "1983-01-04",
      "age" : 30,
      "birthplace" : "Chicago, Illinois, USA",
      "height_in" : 72,
      "height_cm" : 182.9,
      "height_m" : 1.8,
      "height_formatted" : "6'0\"",
      "weight_lb" : 185,
      "weight_kg" : 84.1,
      "position" : "PG",
      "uniform_number" : 12
    }
  ]
};

moduleForComponent('sortable-table', 'Unit | Component | sortable table', {
  unit: true,

  beforeEach: function() {
    // creates the component instance
    component = this.subject({
      data: data // set the data property for all component instances
    });
  }
});

test('it renders', function(assert) {
  assert.expect(2);

  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('headers have been assembled from object keys', function(assert) {
  console.log(component);
  assert.ok(false, 'headers');
});
