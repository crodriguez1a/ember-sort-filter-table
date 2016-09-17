import Ember from 'ember';
import layout from '../templates/components/sf-headings';
import computed from 'ember-computed-decorators';

const {
  Component,
  get,
  set,
  Object: emObj,
  A: emArr
} = Ember;

export default Component.extend({
  layout,
  tagName: '',

  actions: {
    /**

    */
    sort(key) {
      let dir = get(this, 'group.groupDirection');
      set(this, 'group.groupDirection', dir === 'asc' ? 'desc' : 'asc');
      set(this, 'group.groupSortKey', key);
    }
  }
});
