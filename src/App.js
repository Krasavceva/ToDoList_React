import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./cotext";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 0, complited: false, name: "Buy milk" },
    { id: 1, complited: false, name: "Buy bread" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => id !== todo.id));
  }

  function addTodo(name) {
    setTodos(
      todos.concat({
        name,
        id: Date.now(),
        complited: false,
      })
    );
  }

  return (
    <Context.Provider value={{ removeTodo, toggleTodo }}>
      <div className="wrapper">
        <h1>
          Things to do{" "}
          <span role="img" aria-label="honeybee">
            🐝
          </span>
        </h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} />
        ) : (
          <p>
            There is nothing to do{" "}
            <span role="img" aria-label="OK hand">
              👌
            </span>
          </p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
