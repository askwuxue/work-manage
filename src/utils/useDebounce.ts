// 自定义HOOK 防抖处理, 利用自定义HOOK 将用户的输入进行防抖处理后输出
// TODO 自定义HOOK将用户param传入，然后通过将param转换为debounceValue
// 然后导出的形式。从而做到防抖
import { useState, useEffect } from "react";

// TODO any可以是任何值，也可以赋值给任何值， unknown可以是任何值，但是不加判断不能赋值给任何值
// TODO 使用泛型约束函数的参数与返回值.当我们不清楚函数传递的参数的类型时，可以设置为泛型
// ts 会帮助我们自动检测并返回正确的类型
const useDebounce = function <K>(value: K, delay: number): K {
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
