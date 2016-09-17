import Ember from 'ember';

export function arrayQuery(params) {
  // Stringify the hash
  let hash = params[0];
  let str = JSON.stringify(hash);

  // Convert the query to a regex
  let query = params[1] || '';
  let rgx = new RegExp(query, 'i');

  // Return a bool
  return (rgx).test(str);
}

export default Ember.Helper.helper(arrayQuery);
