import React, { useContext } from "react";
import cn from "classnames";
import Context from "../cotext";

export default function TodoItem(props) {
  const { removeTodo, toggleTodo } = useContext(Context);

  const { todo, index } = props;

  const classes = cn({
    done: todo.complited,
  });

  return (
    <li className="todo-item-li">
      <span className={classes}>
        <input
          className="todo-item-input"
          type="checkbox"
          checked={todo.complited}
          onChange={() => toggleTodo(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.name}
      </span>
      <button className="rm" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}
