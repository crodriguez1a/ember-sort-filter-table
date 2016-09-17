import Ember from 'ember';
import layout from '../templates/components/sf-rows';

const {
  Component
} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',
  sortKey: null,
  direction: 'desc'
});
