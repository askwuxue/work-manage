import React from 'react';

const apiUrl = process.env.REACT_APP_URI_API;

const Login = function() {
    const handleLogin = (event) => {
        console.log(event.target.elements);
        // TODO 访问表单中元素的方法
        let username = event.target.elements[0].value;
        let password = event.target.elements[1].value;
        // TODO 对于有默认行为的事件，一定要阻止默认行为的发生。
        fetch(`${apiUrl}`).then(
            async (res) => {
              if (res.ok) {
                // setList(await res.json());
              }
            }
          );
        event.preventDefault();
    }
    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="username">username</label>
            <input type="username" name="username" id="username"/>
            <label htmlFor="password">password</label>
            <input type="password" name="pwd" id="password"/>
            <input type="submit" value="submit"/>
        </form>
    )
}

export default Login