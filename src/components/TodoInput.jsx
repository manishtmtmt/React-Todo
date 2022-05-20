import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Add a to-do..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(value);
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export { TodoInput };
