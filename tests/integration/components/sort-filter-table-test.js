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
      'under_scored_underscored' : true
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

let camelCase = {
  rows: [
    {
      'camelCase': true,
      'caseCamel': true
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
  assert.equal(component._state, 'preRender', 'It pre-rendered');
  this.render(hbs`
    {{component 'sort-filter-table' table=sample}}
  `);
  assert.equal(component._state, 'inDOM', 'It is in the DOM');
});

test('it assembles header labels', function(assert) {
  component.set('table', sample);
  assert.equal(component.get('labels').length, this.$().find('.sort-labels').length, 'Correct number of labels are in DOM and in sync with model');
});

test('it handles headers with underscores, hyphens, spaces, or camel case', function(assert) {
  //hyphenated keys
  component.set('table', hyphen);
  console.log(component.get('labels'));

  let labelName = component.get('labels').getEach('name')[0];
  assert.equal((/-/g).test(labelName), false, 'When object keys use hyphens, labels are displayed DOM without hyphens');

  //keys with underscores
  run(() => {
    component.set('table', underscore);
    let labelName = component.get('labels').getEach('name')[0];
    assert.equal((/_/g).test(labelName), false, 'When object keys use underscores, labels are displayed DOM without underscores');

  });

  //keys with camel case
  run(() => {
    component.set('table', camelCase);
    let labelName = component.get('labels').getEach('name')[0];
    assert.equal((/[A-Z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*/).test(labelName), false, 'When object keys use camel case, labels are displayed DOM with no camel casing');
  });

});

test('it sorts alphabetically', function(assert) {
  component.set('table', alphaSort);

  let $sortLabel = this.$('.sort-labels');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), 'zeta', 'Table was sorted alphabetically');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), 'alpha', 'Table was sorted again in the reverse');

});

test('it sorts numerically', function(assert) {
  component.set('table', numericSort);

  let $sortLabel = this.$('.sort-labels');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), '1', 'Table was sorted numerically');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), '0', 'Table was sorted again in the reverse');
});

test('it filters appropriately', function(assert) {
  component.setProperties({
    'table'  : sample,
    'filter' : partialFilter
  });
  assert.equal(this.$().find('tbody tr').length, 1, 'When a filter is applied, the number of table rows in the DOM reduces accordingly');

  run(() => {
    component.setProperties({
      'table'  : sample,
      'filter' : multiFilter
    });
    assert.ok(this.$().find('tbody tr').length > 0, 'When a filter using two query terms (eg., John Doe) is applied, a match is found');
  });

});

test('it handles both POJOs and Ember Objects in the model', function(assert) {
  component.set('table', emberObject);
  assert.equal(this.$().find('tbody tr').length, 1, 'When an Ember Object is passed, DOM is populated accordingly');
});

test('it toggles to edit mode', function(assert) {
  component.setProperties({
    'table'    : sample,
    'editable' : true,
    'edit'     : 'myEditAction',
    'cancel'   : 'myCancelAction'
  });

  let $editValue = this.$('.edit-value:first');
  $editValue.click();

  assert.ok(this.$().find('.edit-field:first').length > 0, 'An editable value was clicked, its corresponding form is displayed');
  assert.ok(this.$('.send-edit:first').length > 0, 'An edit button is available');
  assert.ok(this.$('.cancel-edit:first').length > 0, 'A cancel button is available');

});

test('it sends up the params up to the controller', function(assert) {
  let editValues;
  let cancelValues;

  //Simulate controller
  let myEditAction = (params) => {
    editValues = params;
  };

  let myCancelAction = (params) => {
    cancelValues = params;
  };

  component.setProperties({
    'table'    : sample,
    'editable' : true,
    'edit'     : myEditAction,
    'cancel'   : myCancelAction
  });

  this.$('.edit-value:first').click();
  this.$('.send-edit:first').click();
  assert.ok(!!editValues, 'The controller\'s edit action received parameters');

  run(() => {
    this.$('.edit-value:first').click();
    this.$('.cancel-edit:first').click();
    assert.ok(!!cancelValues, 'The controller\'s cancel action received parameters');
  });

});


//TODO: test when model changes asynchronously from service
