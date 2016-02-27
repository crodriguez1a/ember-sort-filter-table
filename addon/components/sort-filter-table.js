import Ember from 'ember';
import _ from 'lodash/lodash';

const {
  computed,
  observer
} = Ember;

const {
  sort,
  alias,
  bool
} = computed;

const { keys } = Object;

/**
  Sortable Filterable Table Component

  @class SortFilterTable
  @extends Ember.Component
*/
export default Ember.Component.extend({
  hasBlock: bool('template').readOnly(),

  /**
   Config: Signal if filter input field should be included

   @property filterable
   @returns Bool
   @public
  */
  filterable: true,

  /**
    Map raw data in to Ember A and Ember Objects

    @property _rows
    @returns Array
    @private
  */
  _rows: computed('table.rows', function() {
    let rows = this.get('table.rows');
    return Ember.A(rows.map((row) => {
      return Ember.Object.create(row);
    }));
  }),

  /**
    Array of properties to determine sort order

    @property _sortOrder
    @returns Array
    @private
  */
  _sortOrder: Ember.A([]),

  /**
    Rows sorted by specified sort order

    @property sortedRows
    @returns Array
    @public
  */
  sortedRows: sort('_rows', '_sortOrder'),

  /**
   Extract column headers from keys

   @property headers
   @returns Array
   @public
  */
  headers: computed('sortedRows', function() {
    return Ember.A(keys(this.get('sortedRows.firstObject')));
  }),

  /**
    Store separator for headers

    @property _separator
    @returns String
    @private
  */
  _separator: null,

  /**
    Replaces hyphens or underscores with spaces (used to prettify headers)

    @method _handleSeparators
    @private
  */
  _handleSeparators(str) {
    let separator = str.match(/[-  _]/g);
    let camelCase = str.match(/[A-Z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*/);
    separator = camelCase || separator;

    if (separator && separator.length) {
      this.set('_separator', separator[0]);
      return str.replace(new RegExp(separator[0]), ' ');
    } else {
      return str;
    }
  },

  _stripPrivate(arr) {
    arr.filter((item, index) => {
      if ((/_/).test(arr[index][0])) {
        arr.splice(index, 1);
      }
    });
    return arr;
  },

  /**
    Assemble pretty labels from column headers/keys

    @property labels
    @returns Array
    @public

  */
  labels: computed('headers', function() {
    let headers = this._stripPrivate(this.get('headers'));

    return Ember.A(headers.map((item) => {
      return Ember.Object.create({
        _key: item,
        name: this._handleSeparators(item),
        sort: 'null'
      });
    }));
  }),

  /**
    Signal wether current sort param is asc or desc

    @property _ascending
    @type Bool
    @private
  */
  _ascending: true,

  /**
    Calculated total number of columns (colspan)

    @property totalColumns
    @returns Number
    @public
  */
  totalColumns: alias('labels.length'),

  /**
    Filter by search param from input

    @method _applyFilter
    @private
  */
  _applyFilter: observer('filter', function() {
    let rows = this.get('sortedRows');

    //case insensitive
    let filterQuery = (this.get('filter')).toLowerCase();

    rows.filter((row) => {
      let values = _.values(row);
      let filterExp = new RegExp(filterQuery);
      return row.set('_filtered', !(filterExp).test((values.join(',')).toLowerCase()));
    });

  }),

  actions: {
    /**
      Toggle sort by property asc/desc

      @method sortBy
    */
    sortBy(label) {
      let header = label.get('name').replace(/ /g, this.get('_separator'));
      let labels = this.get('labels');

      this.toggleProperty('_ascending');
      let direction = this.get('_ascending') ? 'asc' : 'desc';

      labels.setEach('sort', null);
      label.set('sort', direction);

      this.set('_sortOrder', [ header + ':' + direction ]);
    },

    /**
      Send values up to actions

      @method sendEditAction
    */
    sendEditAction(row, key, value, action) {
      if (this.get(action)) {
        this.sendAction(action, {
          'row' : row,
          'key' : key,
          'value' : value
        });
        row.toggleProperty('_editingRow');
      }
    },

    /**
      Display input field for editing

      @method
    */
    editValue(row, key) {
      let rows = this.get('_rows');
      rows.setEach('_editingRow', null);
      row.set('_editingRow', key);
    },
  }
});
