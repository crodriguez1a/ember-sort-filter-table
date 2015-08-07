import Ember from 'ember';

/**
  Credit: rwjblue
*/

const {
  Component,
  computed,
  get
} = Ember;

const { keys } = Object;

/**
  Each Keys component

  @class EachKeys
  @extends Ember.Component
*/
export default Component.extend({
  tagName: 'tr',
  items: computed('object', function() {
    var object = get(this, 'object');
    var keysArr = keys(object);
    return keysArr.map(function(key) {
      return { key: key, value: object[key], private: key[0] === '_'};
    });
  })
});
