import Ember from 'ember';

const {
  Route,
  get,
  set,
  run: { later }
} = Ember;

export default Route.extend({
  model() {
    return get(this, 'store').findAll('demo');
  },

  afterModel() {
    this.controllerFor('application').set('isLoading', false);
  },

  actions: {
    loading(transition, originRoute) {
      this.controllerFor('application').set('isLoading', true);
    }
  }
});
