import React, { useState } from "react";
import styles from "./todo.module.css";

const TodoItem = ({ isCompleted, id, value, deleteTodo }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <span className={isChecked ? styles.completed : ""}>{value}</span>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    </>
  );
};

export { TodoItem };
