import { moduleForComponent, test/*, skip*/ } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { create, text, count } from 'ember-cli-page-object';
import RSVP from 'rsvp';
import {/*setupStore,*/ createStore} from 'dummy/tests/helpers/store';
import DS from 'ember-data';
import { run } from '@ember/runloop';

let store;

const person = DS.Model.extend({
  name: DS.attr('string'),
  nickName: DS.attr('string')
});

const adapter = DS.Adapter.extend({
  deleteRecord() {
    return RSVP.Promise.resolve();
  }
});

const component = create({
  table: text('.table'),
  headings: { count: count(), scope: '.table th' },
  rows: { count: count(), scope: '.table td' },
})

moduleForComponent('sf-em-data', 'Integration | Component | carlos:sf em data', {
  integration: true,
  beforeEach() {
    component.setContext(this);
    store = createStore({ adapter, person });
  },
  afterEach() {
    component.removeContext();
  }
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

test('it renders only the number of rows and columns corresponding with the headings hash: Single', async function(assert) {
  let recordArray = store.recordArrayManager
    .createAdapterPopulatedRecordArray('person', null);

  let payload = {
    data: [
      {
        type: 'person',
        id: '1',
        attributes: {
          name: 'Someone MaJoe'
        }
      }
    ]
  };

  await run(() => {
    recordArray._setInternalModels(store._push(payload), payload);
  });

  this.model = recordArray;

  this.render(hbs`
    {{#sf-table class="is-striped" as | sf |}}
      {{sf.headings
        headings=(array
        (hash key="name" display="Name")
        )}}
      {{sf.data store=model}}
    {{/sf-table}}
  `);
  assert.equal(component.headings.count, 1, 'A single heading was rendered');
  assert.equal(component.rows.count, 1, 'A single row rendered');
});

test('it renders only the number of rows and columns corresponding with the headings hash: Multiple', async function(assert) {
  let recordArray = store.recordArrayManager
    .createAdapterPopulatedRecordArray('person', null);

  let payload = {
    data: [
      {
        type: 'person',
        id: '1',
        attributes: {
          name: 'Someone MaJoe',
          nickName: 'Super MaJoe'
        }
      }
    ]
  };

  await run(() => {
    recordArray._setInternalModels(store._push(payload), payload);
  });

  this.model = recordArray;

  this.render(hbs`
    {{#sf-table class="is-striped" as | sf |}}
      {{sf.headings
        headings=(array
        (hash key="name" display="Name")
        (hash key="nickName" display="Nick Name")
        )}}
      {{sf.data store=model}}
    {{/sf-table}}
  `);
  // assert.async();
  assert.equal(component.headings.count, 2, 'Multiple headings were rendered');
  assert.equal(component.rows.count, 2, 'Multiple rows were rendered');
});

// TODO unit test POJO extractions
