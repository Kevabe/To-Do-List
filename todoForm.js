import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const onChange = (e) => {
    console.log("onchange" + value);
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          value={value}
          placeholder="Enter Stuff To-Do"
          onChange={onChange}
        />
        <div className="plus" onClick={handleSubmit}>
          +
        </div>
      </form>
    </>
  );
};

export default TodoForm;