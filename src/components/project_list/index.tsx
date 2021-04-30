import React, { useState, useEffect } from "react";
import Search from "../search";
import List from "../list";
import useMount from "../../utils/useMount";
import useDebounce from "../../utils/useDebounce";
import parseParams from "../../utils/parseParams";

// TODO 通过.env 和 .env.development 配置开发的URI和线上的URI
const apiUrl = process.env.REACT_APP_URI_API;

function ProjectList() {
  // 初始化option列表
  let [users, setUsers] = useState([]);

  // list列表
  let [list, setList] = useState([]);

  // 初始化的用户名和用户Id
  let [param, setParam] = useState({
    name: "",
    personId: "",
  });

  // TODO 自定义HOOK的返回值由param的改变和delay决定
  const debounceParam = useDebounce(param, 800);

  // TODO 使用自定义HOOK
  // 只渲染一次，取users数据
  useMount(() => {
    // TODO fetch返回的是一个Promise对象，除非断网，否则一直是resolve
    fetch(`${apiUrl}users/`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  // TODO useEffect是异步函数
  // 根据用户选择的条件进行请求
  useEffect(() => {
    fetch(`${apiUrl}projects/?${parseParams(debounceParam)}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [debounceParam]);

  return (
    <div>
      <Search param={param} setParam={setParam} users={users}></Search>
      <List users={users} list={list}></List>
    </div>
  );
}

export default ProjectList;
