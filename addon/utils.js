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

/**
  Object values polyfill
  https://github.com/tc39/proposal-object-values-entries/blob/master/polyfill.js
*/
const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
const concat = Function.bind.call(Function.call, Array.prototype.concat);
const keys = Reflect.ownKeys;

if (!Object.values) {
	Object.values = function values(O) {
		return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
	};
}
