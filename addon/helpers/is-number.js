import Ember from 'ember';

const {
  Helper: { helper }
} = Ember;

export function isNumber(params/*, hash*/) {
  let val = params[0];
  // See if this value only contains numbers (e.g., "12" but not "12 things")
  return val && (/^[0-9]*$/).test(val);
}

export default helper(isNumber);
