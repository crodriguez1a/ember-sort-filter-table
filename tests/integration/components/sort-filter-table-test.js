import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

//since run-loop is disabled, wrap any code with asynchronous side-effects in a run
const { run } = Ember;

let component;
let sample = {
    rows: [ {
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
    }, {
      'last_name' : 'Bynum',
      'first_name' : 'William',
      'display_name' : 'Will Bynum',
      'birthdate' : '1983-01-04',
      'age' : 30,
      'birthplace' : 'Chicago, Illinois, USA',
      'height_in' : 72,
      'height_cm' : 182.9,
      'height_m' : 1.8,
      'height_formatted' : '6\'0\'',
      'weight_lb' : 185,
      'weight_kg' : 84.1,
      'position' : 'PG',
      'uniform_number' : 12
    }
  ]
};

let hyphen = {
  rows: [
    {
      'hyphen-ated' : true
    }
  ]
};

let underscore = {
  rows: [
    {
      'under_scored' : true
    }
  ]
};

let alphaSort = {
  rows: [
    {
      'name': 'alpha'
    },
    {
      'name': 'zeta'
    }
  ]
};

let numericSort = {
  rows: [
    {
      'number': 0
    },
    {
      'number': 1
    }
  ]
};

let emberObject = Ember.Object.create({
  rows: Ember.A([
    Ember.Object.create({
      foo: 'bar'
    })
  ])
});

let partialFilter = 'Chau';
let multiFilter = 'Chauncey Billups';

moduleForComponent('sort-filter-table', 'Integration | Component | sort filter table', {
  integration: true,
  needs: ['component:each-keys'],
  beforeEach() {
    component = this.subject();
  }
});

test('it renders', function(assert) {
  assert.expect(2);
  assert.equal(component._state, 'preRender', 'It pre-rendered');
  this.render(hbs`
    {{component 'sort-filter-table' table=sample}}
  `);
  assert.equal(component._state, 'inDOM', 'It is in the DOM');
});

test('it assembles header labels', function(assert) {
  assert.expect(1);
  component.set('table', sample);
  assert.equal(component.get('labels').length, this.$().find('.sort-labels').length, 'Correct number of labels are in DOM and in sync with model');
});

test('it handles headers with underscores as well as hyphens', function(assert) {
  assert.expect(2);
  //hyphenated keys
  component.set('table', hyphen);
  assert.equal(component.get('labels').length, this.$().find('.sort-labels').length, 'When object keys use hyphens, correct number of labels are in DOM and in sync with model');

  //keys with underscores
  run(() => {
    component.set('table', underscore);
    assert.equal(component.get('labels').length, this.$().find('.sort-labels').length, 'When object keys use underscores, correct number of labels are in DOM and in sync with model');
  });

});

test('it sorts alphabetically', function(assert) {
  assert.expect(2);

  component.set('table', alphaSort);

  let $sortLabel = this.$('.sort-labels');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text(), 'zeta', 'Table was sorted alphabetically');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text(), 'alpha', 'Table was sorted again in the reverse');

});

test('it sorts numerically', function(assert) {
  assert.expect(2);

  component.set('table', numericSort);

  let $sortLabel = this.$('.sort-labels');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text(), '1', 'Table was sorted numerically');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text(), '0', 'Table was sorted again in the reverse');
});

test('it filters appropriately', function(assert) {
  assert.expect(2);

  component.setProperties({
    'table' : sample,
    'filter': partialFilter
  });
  assert.equal(this.$().find('tbody tr').length, 1, 'When a filter is applied, the number of table rows in the DOM reduces accordingly');

  run(() => {
    component.setProperties({
      'table' : sample,
      'filter': multiFilter
    });
    assert.ok(this.$().find('tbody tr').length > 0, 'When a filter using two query terms (eg., John Doe) is applied, a match is found');
  });

});

test('it handles both POJOs and Ember Objects in the model', function(assert) {
  assert.expect(1);

  component.set('table', emberObject);
  assert.equal(this.$().find('tbody tr').length, 1, 'When an Ember Object is passed, DOM is populated accordingly');
});

//TODO: test when model changes asynchronously from service
