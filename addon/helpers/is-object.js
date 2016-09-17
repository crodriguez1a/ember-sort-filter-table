import Ember from 'ember';

export function isObject(params/*, hash*/) {
  let obj = params[0];
  return obj && obj.toString() === '[object Object]';
}

export default Ember.Helper.helper(isObject);
