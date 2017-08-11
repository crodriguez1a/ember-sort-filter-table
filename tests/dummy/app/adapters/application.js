import DS from 'ember-data';
import config from '../config/environment';

const PREFIX = config.APP.NAMESPACE || '';

const {
  JSONAPIAdapter
} = DS;

export default JSONAPIAdapter.extend({
  namespace: `${PREFIX}/json`,
  pathForType (modelName) {
    return `${modelName}.json`;
  }
});
