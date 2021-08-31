import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickReturn } = props;
  return (
    <>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li className="list-row" key={todo}>
              <div>
                <span>{todo}</span>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
