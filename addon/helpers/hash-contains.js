import { helper } from "@ember/component/helper";

const {
  stringify
} = JSON;

export function hashContains(params) {
  // Stringify the hash
  let _hash = params[0];
  let str = stringify(_hash);

  // Convert the query to a regex
  let query = params[1] || '';
  let rgx = new RegExp(query, 'i');

  // Returns truthy when str was found in hash
  return (rgx).test(str);
}

export default helper(hashContains);
