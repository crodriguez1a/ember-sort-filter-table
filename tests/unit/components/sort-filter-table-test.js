import { moduleForComponent, test } from 'ember-qunit';

const { run } = Ember;

let component;
let model = {
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

moduleForComponent('sort-filter-table', 'Unit | Component | sort filter table', {
  unit: true,
  needs: ['component:each-keys'],
  beforeEach: function() {
    // creates the component instance
    component = this.subject({
      table: model // set the data property for all component instances
    });
  }
});

test('it renders', function(assert) {
  assert.expect(2);

  assert.equal(component._state, 'preRender', 'It pre-rendered');

  // Renders the component to the page
  assert.equal(component._state, 'inDOM', 'It is in the DOM');
});
