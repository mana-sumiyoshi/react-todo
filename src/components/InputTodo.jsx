import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  height: "30px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <>
      <div style={style} className="section-area">
        <input
          type="text"
          placeholder="TODOを追加"
          value={todoText}
          onChange={onChange}
          disabled={disabled}
        />
        <button onClick={onClick} disabled={disabled}>
          追加
        </button>
      </div>
    </>
  );
};
