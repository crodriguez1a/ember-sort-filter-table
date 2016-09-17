import Ember from 'ember';
import layout from '../templates/components/sf-rows';

const {
  Component
} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',
  /**
    * Key to sorty by
    *
    * @property sortKey
    * @type String
    * @public
    */
  sortKey: null,

  /**
    * Sort direction (asc/desc)
    *
    * @property direction
    * @type String
    * @public
    */
  direction: 'desc'
});
