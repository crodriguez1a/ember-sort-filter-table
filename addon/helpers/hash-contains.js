import Ember from 'ember';

const {
  Helper: { helper }
} = Ember;

const {
  stringify
} = JSON;

export function hashContains(params) {
  // Stringify the hash
  let hash = params[0];
  let str = stringify(hash);

  // Convert the query to a regex
  let query = params[1] || '';
  let rgx = new RegExp(query, 'i');

  // Returns truthy when str was found in hash
  return (rgx).test(str);
}

export default helper(hashContains);
