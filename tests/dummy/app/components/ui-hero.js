import Component from '@ember/component';

export default Component.extend({
  classNames: ['hero'],
  classNameBindings: ['isWarning:is-warning']
});
