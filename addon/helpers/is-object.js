import { helper } from "@ember/component/helper";

export function isObject(params/*, hash*/) {
  let obj = params[0];
  return obj && obj.toString() === '[object Object]';
}

export default helper(isObject);
