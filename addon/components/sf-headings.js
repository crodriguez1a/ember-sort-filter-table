import Ember from 'ember';
import layout from '../templates/components/sf-headings';
import computed from 'ember-computed-decorators';

const {
  Component,
  get,
  set,
} = Ember;

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
      let dir = get(this, 'group.groupDirection');
      // Toggle direction
      set(this, 'group.groupDirection', dir === 'asc' ? 'desc' : 'asc');
      // Update sort key
      set(this, 'group.groupSortKey', key);
    }
  }
});
