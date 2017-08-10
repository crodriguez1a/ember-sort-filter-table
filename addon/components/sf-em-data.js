import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../templates/components/sf-em-data';
import { computed } from 'ember-decorators/object';

export default Component.extend({
  layout,
  tagName: '',

  /**
    * Signal if nested arrays or objects should be displayed as a list
    *
    * @property shouldListNested
    * @default true
    * @type Bool
    * @public
    */
  shouldListNested: true,

  /**
    Extract plain object from ember data internal model

    @method _extractPojo
    @param store {Service}
    @private
  */
  _extractPojo(store) {
    return store.toArray().map((item) => get(item, '_internalModel._data'));
  },

  /**
    Filter out nodes when a corresponding header was not provided
    headings ['name', 'address']
    data [{ name, address, phone }, {...]
    result [ {name, address }, {... ]

    @method _filterByHeadings
    @param arr {Array}
    @param headings {Array}
    @returns Array
    @private
  */
  _filterByHeadings(arr, headings) {
    return arr.map((hash) => {
      for (let key in hash) {
        if (headings.includes(key)) {
          return hash;
        }
      }
    })
  },

  /**
    * Convert ember data internal model into plain array
    *
    * @property listNested
    * @default true
    * @type Bool
    * @public
    */
  @computed('store')
  poja(store) {
    let objArr = [];
    let headings = get(this, 'group.groupHeadings');

    if (store) {
      objArr = this._extractPojo(store);

      if (headings && headings.length) {
        objArr = this._filterByHeadings(objArr, headings);
      }
    }
    return objArr;
  },


});
