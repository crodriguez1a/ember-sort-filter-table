import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  /**
    @property Name of currently active section
    @type Sting
  */
  tab: null,

  /**
    @property Action to perform to show active section
    @type Function
  */
  show: null,

  actions: {
    show() {
      if (get(this, 'show')) {
        get(this, 'show')(...arguments);
      }
    }
  }
});
