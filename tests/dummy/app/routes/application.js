import Route from "@ember/routing/route";
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),
  queryParams: {
    tab: {
      replace: true
    }
  },

  model() {
    return get(this, 'store').findAll('demo');
  }
});
