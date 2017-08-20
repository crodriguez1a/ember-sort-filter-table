import Route from "@ember/routing/route";
import { get } from '@ember/object';

export default Route.extend({
  queryParams: {
    tab: {
      replace: true
    }
  },

  model() {
    return get(this, 'store').findAll('demo');
  }
});
