/**
  Object keys with a leading underscore should be designated as private

  @method isPrivateKey
  @private
  @returns Bool
*/
export const isPrivateKey = (key) => {
  return (/_/).test(key[0]);
};

/**
  Extract only keys that point to primitive types
  (exluding null and undefined)

  @method primitiveKeys
  @private
  @returns Array
*/
export const primitiveKeys = (obj) => {
  let arr = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      let val = obj[i];
      if (typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number') {
        arr.push(i);
      }
    }
  }
  return arr;
};
