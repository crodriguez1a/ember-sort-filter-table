import Ember from 'ember';
import layout from '../templates/components/sf-em-data';
import computed from 'ember-computed-decorators';

const {
  Component,
  get,
  set
} = Ember;

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
    if (store) {
      store.toArray().map((item) => {
        let arr = {};
        // Extract pojo from record
        let internalModel = get(item, '_internalModel._data');

        // Strip away ember data properties
        for (var i in internalModel) {
          arr[i] = internalModel[i];
        }
        objArr.push(arr);
      });
    }
    return objArr;
  }
});
