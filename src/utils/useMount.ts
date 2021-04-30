// 实现一个自定义HOOK对同一的函数进行封装
import { useEffect } from "react";

const useMount = function (callback: () => void) {
  useEffect(() => {
    callback();
  }, []);
};

export default useMount;
