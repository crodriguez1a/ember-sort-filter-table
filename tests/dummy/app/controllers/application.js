import Controller from '@ember/controller';
import { set, setProperties } from '@ember/object';

export default Controller.extend({
  showInline: true,
  showBlock: false,
  showEmberData: false,
  activeSection: 'ember-data',

  actions: {
    show(section) {
      setProperties(this, {
        showInline: false,
        showBlock: false,
        showEmberData: false
      });
      set(this, `show${section}`, true);
      set(this, 'activeSection', section);
    }
  }
});
