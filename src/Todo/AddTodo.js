import React from "react";

function AddTodo(props) {
  const { onCreate } = props;
  let [value, setValue] = React.useState("");

  const changeText = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-todo-input"
        value={value}
        onChange={changeText}
      />
      <button type="submit" className="add-todo-button">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
