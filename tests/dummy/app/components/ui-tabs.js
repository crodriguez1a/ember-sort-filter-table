import Component from '@ember/component';

export default Component.extend({
  classNames: ['tabs'],
  classNameBindings: ['isBoxed:is-boxed', 'isRight:is-right']
});
