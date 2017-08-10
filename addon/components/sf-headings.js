import Component from '@ember/component';
import { get, set } from '@ember/object';
import layout from '../templates/components/sf-headings';

export default Component.extend({
  layout,
  tagName: '',

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
      let dir = get(this, 'group.blockSortDirection');
      // Toggle direction
      set(this, 'group.blockSortDirection', dir === 'asc' ? 'desc' : 'asc');
      // Update sort key
      set(this, 'group.blockSortKey', key);
    }
  }
});
