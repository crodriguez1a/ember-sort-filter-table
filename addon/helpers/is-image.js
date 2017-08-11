import { helper } from "@ember/component/helper";

export function isImage(params/*, hash*/) {
  let img = params[0];
  return img && (/([^\s]+(\.(jpg|png|gif|bmp))$)/gm).test(img);
}

export default helper(isImage);
