import Ember from 'ember';

const {
  computed,
  observer
} = Ember;

const {
  sort,
  alias
} = computed;

const { keys } = Object;

/**
  Sortable Filterable Table Component

  @class SortFilterTable
  @extends Ember.Component
*/
export default Ember.Component.extend({

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

    @method _handleUnderscoresHyphens
    @private
  */
  _handleUnderscoresHyphens(str) {
    if ((/-/).test(str)) {
      this.set('_separator', '-');
      return str.replace(/-/, ' ');
    } else if ((/_/).test(str)) {
      this.set('_separator', '_');
      return str.replace(/_/g, ' ');
    } else {
      return str;
    }
  },

  /**
    Assemble pretty labels from column headers/keys

    @property labels
    @returns Array
    @public

  */
  labels: computed('headers', function() {
    let headers = this.get('headers');
    return headers.map((item) => {
      return this._handleUnderscoresHyphens(item);
    });
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
    sortBy: function(label) {
      let header = label.replace(/ /g, this.get('_separator'));
      this.toggleProperty('_ascending');
      let direction = this.get('_ascending') ? 'asc' : 'desc';
      this.set('_sortOrder', [ header + ':' + direction ]);
    },

  }

});
