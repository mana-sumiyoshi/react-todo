import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <>
      <div className="input-area section-area">
        <input
          type="text"
          placeholder="TODOを追加"
          value={todoText}
          onChange={onChange}
        />
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
};
