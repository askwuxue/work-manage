// 自定义HOOK 防抖处理, 利用自定义HOOK 将用户的输入进行防抖处理后输出
// TODO 自定义HOOK将用户param传入，然后通过将param转换为debounceValue
// 然后导出的形式。从而做到防抖
import { useState, useEffect } from "react";

const useDebounce = function (value: any, delay: number) {
  let [debounceValue, setDebounceValue] = useState(value);

  // TODO 第一个回调函数，和componentDidMount的作用一致
  // 返回的函数，会在每一次渲染执行
  // 注意React为什么使用[delay, value]会出现warning
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, value, debounceValue]);

  return debounceValue;
};

export default useDebounce;
