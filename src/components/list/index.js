// import { React } from "react";
// setUsers
function List({ users, list }) {
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
          {list.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                {/* TODO一般来说，后端返回给我们的数据希望准确唯一，所以在projects中只有personId，
                  我们需要根据personId 在users中进行find */}
                {/* TODO find返回值是数组中的某一项，不是一个数组 */}
                {/* TODO ?. 可选链，表达式为null或者undefined时，使用 ?. 返回undefined*/}
                {/* TODO 对于数据查询类的操作，一定要敏感。对于可能的错误一定要捕捉 */}
                <td>
                  {users.find((user) => user.id === item.personId)?.name ||
                    "未知-o-"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
