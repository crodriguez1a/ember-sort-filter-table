import DS from 'ember-data';

const {
  JSONAPIAdapter
} = DS;

export default JSONAPIAdapter.extend({
  namespace: 'json',
  pathForType (modelName) {
    return `${modelName}.json`;
  }
});
