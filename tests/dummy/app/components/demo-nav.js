import Component from '@ember/component';

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
  show: null
});
