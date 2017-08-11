import Component from '@ember/component';
import { set } from '@ember/object';
import layout from '../templates/components/sf-filter';

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['sf-table--filter'],
  placeholder: 'Filter',
  actions: {
    /**
      * Clear the current filter query
      *
      * @method clearField
      * @private
      */
    clearField() {
      set(this, 'group.groupQuery', null);
    }
  }
});
