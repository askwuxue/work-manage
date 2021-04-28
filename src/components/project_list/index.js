import React, { useState, useEffect } from "react";
import Search from "../search";
import List from "../list";

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

  // 只渲染一次，取users数据
  useEffect(() => {
    // TODO fetch返回的是一个Promise对象，除非断网，否则一直是resolve
    fetch(`${apiUrl}users/`).then(async (res) => {
      if (res.ok) {
        // console.log(res);
        // console.log('await res.json()): ', await res.json());
        // console.log('parseParams(param);: ', parseParams(param));
        // console.log('render');
        setUsers(await res.json());
        // parseParams(param);

        // console.log(users);
      }
    });
  }, []);

  // TODO useEffect是异步函数
  // 根据用户选择的条件进行请求
  useEffect(() => {
    fetch(`${apiUrl}projects/?${parseParams(param)}`).then(async (res) => {
      if (res.ok) {
        console.log(param);
        console.log("parseParams(param): ", parseParams(param));
        console.log("await res.json(): ", await res.json());
        // setUsers(await res.json())
      }
    });
  }, [param]);

  return (
    <div>
      <Search param={param} setParam={setParam} users={users}></Search>
      <List users={users} setUsers={setUsers}></List>
    </div>
  );
}

export default ProjectList;
