import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Controller,
  get,
  set
} = Ember;

export default Controller.extend({
  showInline: true,
  showBlock: false,
  showEmberData: false,
  activeSection: 'inline',

  actions: {
    show(section) {
      this.setProperties({
        showInline: false,
        showBlock: false,
        showEmberData: false
      });
      set(this, `show${section}`, true);
      set(this, 'activeSection', section);
    }
  }
});
