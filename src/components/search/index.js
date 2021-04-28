import React from "react";

// TODO 函数参数的结构赋值
function Search({ param, setParam, users }) {
  return (
    <form>
      <div>
        {/* input改变更新value */}
        <input
          type="input"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        ></input>
        {/* selection改变更新personId */}
        <select
          value={param.personId}
          onChange={(e) =>
            setParam({
              ...param,
              personId: e.target.value,
            })
          }
        >
          <option>默认</option>
          {users.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
}

export default Search;
