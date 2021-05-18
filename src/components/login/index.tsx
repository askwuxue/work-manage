import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_URI_API;

const Login = function () {
  const login = (param: { username: string; password: string }) => {
    console.log("param: ", param);
    const myHeaders = new Headers({
      "Content-Type": "text/plain",
      "Content-Length": '"256',
      "X-Custom-Header": "ProcessThisImmediately",
    });
    // TODO 对于有默认行为的事件，一定要阻止默认行为的发生。
    fetch(`http://localhost:8000/register/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // headers: myHeaders,
      // body: JSON.stringify(param),
      body: "name=111&age=12",
      mode: "no-cors",
    }).then(async (res) => {
      if (res.ok) {
        // setList(await res.json());
        console.log("res.json(): ", res.json());
      }
    });
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    // console.log(event.currentTarget.elements);
    // TODO 访问表单中元素的方法
    let username = (event.currentTarget[0] as HTMLInputElement).value;
    let password = (event.currentTarget[1] as HTMLInputElement).value;
    event.preventDefault();
    login({ username, password });
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">username</label>
      <input type="username" name="username" id="username" />
      <label htmlFor="password">password</label>
      <input type="password" name="pwd" id="password" />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Login;
