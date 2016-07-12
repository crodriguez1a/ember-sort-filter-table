import Ember from 'ember';
import layout from '../templates/components/sort-filter-table';
import computed, { sort, alias } from 'ember-computed-decorators';
import { isPrivateKey, primitiveKeys } from '../utils';

const {
  get,
  set
} = Ember;

const { values } = Object;

/**
  Sortable Filterable Table Component

  @class SortFilterTable
  @extends Ember.Component
*/
export default Ember.Component.extend({
  layout,
  tagName: 'table',
  classNames: ['sort-filter-table table'],
  /**
   Config: Signal if filter input field should be included

   @property filterable
   @type Bool
   @public
  */
  filterable: true,

  /**
    A placeholder to display in the filter input field

    @property filterPlaceholder
    @public
    @type String
  */
  filterPlaceholder: "filter",

  /**
    Only display rows with primitive values and public keys

    @property rows
    @private
    @type Array
  */
  @computed('table.rows', 'filter')
  rows(rows, filterQuery) {
    //case insensitive
    filterQuery = filterQuery ? filterQuery.toLowerCase() : '';

    return Ember.A(rows.filter((row) => {
      let rowValues = values(row);
      let filterExp = new RegExp(filterQuery);
      set(row, '_filtered', !(filterExp).test((rowValues.join(',')).toLowerCase()));
      return row;
    }));
  },

  /**
   Extract column headings from keys

   @property headings
   @type Array
   @public
  */
  @computed('rows')
  headings(rows) {
    return Ember.A(primitiveKeys(rows[0]));
  },

  /**
    Assemble pretty labels from column headings/keys

    @property labels
    @type Array
    @public

  */
  @computed('headings')
  labels(headings) {
    let rows = get(this, 'rows');
    return Ember.A(headings.map((item) => {
      return Ember.Object.create({
        _key: item,
        name: this._handleSeparators(item),
        _sortClass: 'asc',
        _isPrivate: isPrivateKey(item)
      });
    }));
  },

  /**
    Store separator for headings

    @property _separator
    @type String
    @private
  */
  _separator: null,

  /**
    Replaces hyphens or underscores with spaces (used to prettify headings)

    @method _handleSeparators
    @private
  */
  _handleSeparators(str) {
    let isPrivate = str[0] === '_';

    if (!isPrivate) {
      let separator = str.match(/[-  _]/g);
      let camelCase = str.match(/[A-Z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*/);
      separator = camelCase || separator;

      if (separator && separator.length) {
        // save current separator
        set(this, '_separator', separator[0]);

        // return label without separator for display
        return str.replace(new RegExp(separator[0], 'g'), ' ');
      } else {
        // pass through
        return str;
      }
    }

  },

  /**
    Label to determine sort order

    @property sortLabel
    @type String
    @private
  */
  @computed('headings')
  sortLabel(headings) {
    return headings[0];
  },

  /**
    Signal wether current sort param is asc or desc

    @property isAscending
    @type Bool
    @private
  */
  isAscending: true,

  /**
    Compute when sort should reverse order

    @property _direction
    @private
    @type String
  */
  @computed('isAscending')
  _direction(isAscending) {
    return isAscending ? '' : ':desc';
  },

  /**
    Calculated total number of columns (colspan)

    @property totalColumns
    @type Number
    @public
  */
  @alias('labels.length') totalColumns,

  actions: {

    /**
      Apply label as sort

      @method sortByLabel
      @private
    */
    sortByLabel(label) {
      let sortName = get(label, 'name').replace(/ /g, get(this, '_separator'));

      // toggle sort direction
      this.toggleProperty('isAscending');

      // provide direction class
      set(label, '_sortClass', get(this, 'isAscending') ? 'asc' : 'desc');

      // update sort label prop
      set(this, 'sortLabel', sortName);
    },

    /**
      Send values up to actions

      @method sendEditAction
      @private
    */
    sendEditAction(row, key, value, actionType) {
      let action = get(this, actionType);

      set(row, '_editingRow', null);
      if (action) {
        action({
          row,
          key,
          value
        });
      }
    },

    /**
      Display input field for editing

      @method
      @private
    */
    editValue(row, key) {
      let rows = get(this, 'rows');
      rows.setEach('_editingRow', null);
      set(row, '_editingRow', key);
    },
  }
});
