import React from "react";
import { TodoItem } from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      <h3>Here is your Todo list</h3>

      {todos.map((data) => (
        <TodoItem
          isCompleted={data.isCompleted}
          id={data.id}
          value={data.value}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export { TodoList };
