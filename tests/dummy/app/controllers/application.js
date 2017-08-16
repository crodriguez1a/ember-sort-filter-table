import Controller from '@ember/controller';
import { set, setProperties } from '@ember/object';

export default Controller.extend({
  showInline: true,
  showBlock: false,
  showEmberData: false,
  activeSection: 'inline',

  actions: {
    show(section, qp) {
      setProperties(this, {
        showInline: false,
        showBlock: false,
        showEmberData: false
      });
      set(this, `show${section}`, true);
      set(this, 'activeSection', section);
      set(this, 'tab', section);
    }
  }
});
