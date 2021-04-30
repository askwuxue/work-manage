import qs from "querystring";

// 处理请求参数，对参数中value为空且不为零的参数在参数对象中删除
function parseParams(object: object): string {
  // TODO 对象的结构赋值
  // let newObj: any = { ...object };
  // TODO 先使用@ts-ignore 忽略语法提示
  let newObj = { ...object };

  // TODO syntactic Object.keys(obj)
  let keys = Object.keys(newObj);
  keys.forEach((key) => {
    // @ts-ignore
    if (!newObj[key] && newObj[key] !== 0) {
      // @ts-ignore
      delete newObj[key];
    }
  });
  return qs.stringify(newObj);
}

export default parseParams;
