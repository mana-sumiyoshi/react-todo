import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTods] = useState([]);
  // 追加処理
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // 削除処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了処理
  const onClickComplete = (index) => {
    const newImcompleteTodos = [...incompleteTodos];
    newImcompleteTodos.splice(index, 1);
    setIncompleteTodos(newImcompleteTodos);
    const newCompleteTods = [...completeTodos, incompleteTodos[index]];
    setCompleteTods(newCompleteTods);
  };
  // 戻す処理
  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTods(newCompleteTodos);
    const newIncompeteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompeteTodos);
  };
  return (
    <>
      <div className="input-area section-area">
        <input
          type="text"
          placeholder="TODOを追加"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area section-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li className="list-row" key={todo}>
                <div>
                  <span>{todo}</span>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area section-area">
        <p className="title">完了のTODO</p>
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
      </div>
    </>
  );
};
