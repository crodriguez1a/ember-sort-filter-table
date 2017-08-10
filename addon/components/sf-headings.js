import Component from '@ember/component';
import { get, set } from '@ember/object';
import layout from '../templates/components/sf-headings';

export default Component.extend({
  layout,
  tagName: '',
  init() {
    this._super(...arguments);
    if (get(this, 'headings')) {
      set(this, 'group.groupHeadings', get(this, 'headings').getEach('key'))
    }
  },
  actions: {
    /**
      * Updates sort key and direction
      *
      * @method sort
      * @param key {String}
      * @public
      */
    sort(key) {
      // Reference current direction
      let dir = get(this, 'group.groupSortDirection');
      // Toggle direction
      set(this, 'group.groupSortDirection', dir === 'asc' ? 'desc' : 'asc');
      // Update sort key
      set(this, 'group.groupSortKey', key);
    }
  }
});
