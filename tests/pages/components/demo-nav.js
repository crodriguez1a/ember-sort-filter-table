import {
  clickable,
  /* text */
} from 'ember-cli-page-object';

export default {
  // activeSection: text('.t-active-section'),
  tabInline: clickable('.t-tab-inline'),
  tabBlock: clickable('.t-tab-block'),
  tabData: clickable('.t-tab-data')
};
