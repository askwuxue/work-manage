import { React } from "react";

function List({ users, setUsers }) {
  console.log("users: ", users);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>名称</td>
            <td>负责人</td>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.personId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
