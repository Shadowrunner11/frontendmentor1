export function objectFlip(obj: any) {
  return Object.keys(obj).reduce((ret: any, key: any) => {
    ret[obj[key]] = key;
    return ret;
  }, {});
}