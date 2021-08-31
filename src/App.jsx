import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {/* 5個以上の時メッセージを表示 */}
      {incompleteTodos.length >= 5 && (
        <div className="section-area">
          <p style={{ color: "red" }}>
            登録できるtodoは5個までです。消化してください。
          </p>
        </div>
      )}

      <IncompleteTodo
        todos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodo todos={completeTodos} onClickReturn={onClickReturn} />
    </>
  );
};
