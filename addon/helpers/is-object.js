import Ember from 'ember';

const {
  Helper: { helper }
} = Ember;

export function isObject(params/*, hash*/) {
  let obj = params[0];
  return obj && obj.toString() === '[object Object]';
}

export default helper(isObject);
