import Ember from 'ember';
import layout from '../templates/components/each-keys';
import computed from 'ember-computed-decorators';

/**
  Credit: rwjblue
*/

const { keys } = Object;

/**
  Each Keys component

  @class EachKeys
  @extends Ember.Component
*/
export default Ember.Component.extend({
  layout,
  tagName: '',
  @computed('object')
  items(object) {
    if (object) {
      let keysArr = keys(object);
      return keysArr.map((key) => {
        return {
          key,
          value: object[key]
        };
      });
    }
  }
});
