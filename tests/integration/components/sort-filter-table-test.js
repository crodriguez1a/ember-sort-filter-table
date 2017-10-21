import Ember from 'ember';
import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

// since run-loop is disabled, wrap any code with asynchronous side-effects in a run
const {
  run,
  set
} = Ember;

let sample = {
  rows: [
    {
      'last_name': 'Billups',
      'first_name': 'Chauncey',
      'display_name': 'Chauncey Billups',
      'birthdate': '1976-09-25',
      'age': 37,
      'birthplace': 'Denver, Colorado, USA',
      'height_in': 75,
      'height_cm': 190.5,
      'height_m': 1.9,
      'height_formatted': '6\'3\'',
      'weight_lb': 202,
      'weight_kg': 91.8,
      'position': 'PG',
      'uniform_number': 1
    },
    {
      'last_name': 'Bynum',
      'first_name': 'William',
      'display_name': 'Will Bynum',
      'birthdate': '1983-01-04',
      'age': 30,
      'birthplace': 'Chicago, Illinois, USA',
      'height_in': 72,
      'height_cm': 182.9,
      'height_m': 1.8,
      'height_formatted': '6\'0\'',
      'weight_lb': 185,
      'weight_kg': 84.1,
      'position': 'PG',
      'uniform_number': 12
    }
  ]
};

let hyphen = {
  rows: [
    {
      'hyphen-ated': true
    }
  ]
};

let underscore = {
  rows: [
    {
      'under_scored_underscored': true
    }
  ]
};

let alphaSort = {
  rows: [
    {
      name: 'alpha'
    },
    {
      name: 'zeta'
    }
  ]
};

let alphaSortHypen = {
  rows: [
    {
      'the-name': 'alpha'
    },
    {
      'the-name': 'zeta'
    }
  ]
};

let alphaSortUnderscore = {
  rows: [
    {
      'the_name': 'alpha'
    },
    {
      'the_name': 'zeta'
    }
  ]
};

let alphaSortCamelCase = {
  rows: [
    {
      'theName': 'alpha'
    },
    {
      'theName': 'zeta'
    }
  ]
};

let numericSort = {
  rows: [
    {
      number: "0"
    },
    {
      number: "1"
    }
  ]
};

let camelCase = {
  rows: [
    {
      camelCase: true,
      caseCamel: true
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

let privateLabel = {
  rows: [
    {
      _private: 'foo'
    }
  ]
};

let notAllPrimitive = {
  rows: [
    {
      hello: 'world',
      yo: true,
      mtvraps: 1
    }
  ]
};

moduleForComponent('sort-filter-table', 'Integration | Component | sort filter table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with set(this, 'myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sort-filter-table table=table}}`);

  assert.equal(this.$('.no-data-provided').length, 1);

  // Template block usage:
  this.render(hbs`
    {{#sort-filter-table}}
      template block text
    {{/sort-filter-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

skip('contextual component implementation is backwards compatible', function(assert) {
  assert.ok(false);
});

test('it assembles header labels', function(assert) {
  set(this, 'table', sample);
  this.render(hbs`{{sort-filter-table table=table}}`);

  assert.equal(this.$('.table-header').length, 14, 'Correct number of labels are in DOM and in sync with model');
});

test('it excludes headers marked as private with a leading underscore', function(assert) {
  set(this, 'table', privateLabel);
  this.render(hbs`{{sort-filter-table table=table}}`);

  assert.equal(this.$('.table-header').length, 0, 'When an object key has a leading underscore (private), exclude from DOM');
});

test('it handles headers with underscores, hyphens, spaces, or camel case', function(assert) {
  // hyphenated keys
  set(this, 'table', hyphen);
  this.render(hbs`{{sort-filter-table table=table}}`);

  assert.equal((/-/g).test(this.$('.table-header').text().trim()), false, 'When object keys use hyphens, labels are displayed DOM without hyphens');

  // keys with underscores
  run(() => {
    set(this, 'table', underscore);
    this.render(hbs`{{sort-filter-table table=table}}`);

    assert.equal((/_/g).test(this.$('.table-header').text().trim()), false, 'When object keys use underscores, labels are displayed DOM without underscores');
  });

  // keys with camel case
  run(() => {
    set(this, 'table', camelCase);
    this.render(hbs`{{sort-filter-table table=table}}`);

    assert.equal((/[A-Z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*/).test(this.$('.table-header').text().trim()), false, 'When object keys use camel case, labels are displayed DOM with no camel casing');
  });

});

test('it sorts alphabetically', function(assert) {
  set(this, 'table', alphaSort);
  this.render(hbs`{{sort-filter-table table=table}}`);

  let $sortLabel = this.$('.sort-labels');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), 'zeta', 'Table was sorted alphabetically');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), 'alpha', 'Table was sorted again in the reverse');

});

test('it sorts alphabetically with hyphen separator', function(assert) {
  set(this, 'table', alphaSortHypen);
  this.render(hbs`{{sort-filter-table table=table}}`);

  let $sortLabel = this.$('.sort-labels');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), 'zeta', 'Table was sorted alphabetically');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), 'alpha', 'Table was sorted again in the reverse');

});

test('it sorts alphabetically with underscore separator', function(assert) {
  set(this, 'table', alphaSortUnderscore);
  this.render(hbs`{{sort-filter-table table=table}}`);

  let $sortLabel = this.$('.sort-labels');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), 'zeta', 'Table was sorted alphabetically');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), 'alpha', 'Table was sorted again in the reverse');

});

test('it sorts alphabetically with camelCase separator', function(assert) {
  set(this, 'table', alphaSortCamelCase);
  this.render(hbs`{{sort-filter-table table=table}}`);

  let $sortLabel = this.$('.sort-labels');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), 'zeta', 'Table was sorted alphabetically');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), 'alpha', 'Table was sorted again in the reverse');

});

test('it sorts numerically', function(assert) {
  set(this, 'table', numericSort);
  this.render(hbs`{{sort-filter-table table=table}}`);

  let $sortLabel = this.$('.sort-labels');

  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), '1', 'Table was sorted numerically');
  $sortLabel.click();
  assert.equal(this.$().find('tbody td').first().text().replace(/\n/g, '').replace(/ /g, ''), '0', 'Table was sorted again in the reverse');
});

test('it filters appropriately with multiple filter tems', function(assert) {
  set(this, 'table', sample);
  this.render(hbs`{{sort-filter-table filter="Chauncey Billups" table=table}}`);

  assert.ok(this.$().find('tbody tr').length > 0, 'When a filter using two query terms (eg., John Doe) is applied, a match is found');
});

test('it handles both POJOs and Ember Objects in the model', function(assert) {
  set(this, 'table', emberObject);
  this.render(hbs`{{sort-filter-table table=table}}`);

  assert.equal(this.$().find('tbody tr').length, 1, 'When an Ember Object is passed, DOM is populated accordingly');
});

test('it toggles to edit mode', function(assert) {
  this.setProperties({
    table: sample,
    editable: true,
    edit: 'myEditAction',
    cancel: 'myCancelAction'
  });
  this.render(hbs`{{sort-filter-table editable=true edit=edit cancel=cancel table=table}}`);

  let $editValue = this.$('.edit-value:first');
  $editValue.click();

  assert.ok(this.$().find('.edit-field:first').length > 0, 'An editable value was clicked, its corresponding form is displayed');
  assert.ok(this.$('.send-edit:first').length > 0, 'An edit button is available');
  assert.ok(this.$('.cancel-edit:first').length > 0, 'A cancel button is available');

});

test('it sends up the params up to the controller', function(assert) {
  let editValues;
  let cancelValues;

  // Simulate controller
  let myEditAction = (params) => {
    editValues = params;
  };

  let myCancelAction = (params) => {
    cancelValues = params;
  };

  this.setProperties({
    table: sample,
    editable: true,
    edit: myEditAction,
    cancel: myCancelAction
  });
  this.render(hbs`{{sort-filter-table editable=true edit=edit cancel=cancel table=table}}`);

  this.$('.edit-value:first').click();
  this.$('.send-edit:first').click();
  assert.ok(!!editValues, 'The controller\'s edit action received parameters');

  run(() => {
    this.$('.edit-value:first').click();
    this.$('.cancel-edit:first').click();
    assert.ok(!!cancelValues, 'The controller\'s cancel action received parameters');
  });

});

test('it only allows primitive types in its row headers', function(assert) {
  set(this, 'table', notAllPrimitive);
  this.render(hbs`{{sort-filter-table table=table}}`);

  assert.equal(this.$('.table-header').length, 3, 'Keys pointing to non primitive types were not included');
});
