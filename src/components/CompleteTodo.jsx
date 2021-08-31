import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <div className="complete-area section-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
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
    </div>
  );
};
