import React, { FormEvent } from "react";

// const apiUrl = process.env.REACT_APP_URI_API;

const Login = function () {
  // 注册逻辑
  const register = (param: { username: string; password: string }) => {
    console.log("param: ", param);
    // TODO 对于有默认行为的事件，一定要阻止默认行为的发生。
    fetch(`http://localhost:8000/register/`, {
      method: "POST",
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(param),
      // TODO 对于跨域请求，不能设置mode为no-cors
      mode: "cors",
    }).then(async (res) => {
      if (res.ok) {
        const { token, username } = await res.json();
        console.log(username);
        window.localStorage.setItem("token", token);
      }
    });
  };

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    // TODO 访问表单中元素的方法
    let username = (event.currentTarget[0] as HTMLInputElement).value;
    let password = (event.currentTarget[1] as HTMLInputElement).value;
    event.preventDefault();
    register({ username, password });
  };

  // 登录逻辑处理
  const login = (param: { username: string; password: string }) => {
    let token = localStorage.getItem("token");
    console.log(token);
    // TODO 对于有默认行为的事件，一定要阻止默认行为的发生。
    fetch(`http://localhost:8000/login/`, {
      method: "POST",
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        "Content-Type": "application/json; charset=UTF-8",
        bearer: `${token}`,
      },
      body: JSON.stringify(param),
      // TODO 对于跨域请求，不能设置mode为no-cors
      mode: "cors",
    }).then(async (res) => {
      if (res.ok) {
        // const { token, username } = await res.json();
        // console.log(username);
        // console.log("res.json(): ", data);
        // window.localStorage.setItem('token', token);
      }
    });
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    // TODO 访问表单中元素的方法
    let username = (event.currentTarget[0] as HTMLInputElement).value;
    let password = (event.currentTarget[1] as HTMLInputElement).value;
    event.preventDefault();
    login({ username, password });
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">username</label>
        <input type="username" name="username" />
        <label htmlFor="password">password</label>
        <input type="password" name="pwd" />
        <input type="submit" value="submit" />
      </form>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">username</label>
        <input type="username" name="username" />
        <label htmlFor="password">password</label>
        <input type="password" name="pwd" />
        <input type="submit" value="login" />
      </form>
    </>
  );
};

export default Login;
