import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  /**
    Active tab rendered

    @property tab
    @default inline
    @type String
  */
  tab: 'inline',

  actions: {
    show(section) {
      set(this, 'tab', section);
    }
  }
});
