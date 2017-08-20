import Component from '@ember/component';
import layout from '../templates/components/sf-rows';
import { computed } from 'ember-decorators/object';
import { assign } from '@ember/polyfills';

export default Component.extend({
  layout,
  tagName: '',

  /**
    Create a safe copy of the hash provided

    @property _rows
    @private
    @returns {Array}
  */
  @computed('rows')
  _rows(rows) {
    if (rows && rows.length) {
      return rows.map((item) => assign({}, item));
    } else {
      return [];
    }
  }
});
