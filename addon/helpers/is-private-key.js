import { helper } from "@ember/component/helper";
import { isPrivateKey as _isPrivate } from '../utils';

/**
  Object keys with a leading underscore should be designated as private

  @helper isPrivateKey
  @private
  @returns Bool
*/
export function isPrivateKey(params/*, hash*/) {
  let key = params[0];
  return key ? _isPrivate(key) : false ;
}

export default helper(isPrivateKey);
