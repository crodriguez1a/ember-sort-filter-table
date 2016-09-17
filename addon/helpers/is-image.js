import Ember from 'ember';

export function isImage(params/*, hash*/) {
  let img = params[0];
  return img && (/([^\s]+(\.(jpg|png|gif|bmp))$)/gm).test(img);
}

export default Ember.Helper.helper(isImage);
