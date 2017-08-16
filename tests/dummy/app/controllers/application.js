import Controller from '@ember/controller';
import { set, setProperties } from '@ember/object';

export default Controller.extend({
  showInline: true,
  showBlock: false,
  showEmberData: false,

  /**
    Active tab rendered

    @property tab
    @default inline
    @type String
  */
  tab: 'inline',

  actions: {
    show(section) {
      setProperties(this, {
        showInline: false,
        showBlock: false,
        showEmberData: false
      });
      set(this, `show${section}`, true);
      set(this, 'tab', section);
    }
  }
});
