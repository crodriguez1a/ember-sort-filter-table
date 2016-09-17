import Ember from 'ember';
import layout from '../templates/components/sf-filter';

const {
  Component,
  get,
  set
} = Ember;

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['sf-table--filter'],
  placeholder: 'Filter',
  actions: {
    /**
    */
    clearField() {
      set(this, 'group.groupQuery', null);
    }
  }
});
