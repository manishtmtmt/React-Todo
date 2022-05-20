import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        value: newTodo,
        isCompleted: false
      }
    ]);
  };

  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo.id !== value));
  };
  return (
    <div>
      TodoApp
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <button>SHOW COMPLETED TO-DOS</button>
    </div>
  );
};

export { Todo };
