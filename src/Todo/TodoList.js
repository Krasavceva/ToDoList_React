import React from "react";
import TodoItem from "../Todo/TodoItem";

export default function TodoList(props) {
  const todos = props.todos;
  return (
    <ul className="todo-list-ul">
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
    </ul>
  );
}
