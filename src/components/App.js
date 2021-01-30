import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

import "./App.css";

const App = () => {
  const [todos, setTodo] = useState([]);

  const handleAdd = (todo) => {
    setTodo([...todos, todo]);
  };

  const handleDelete = (id) => {
    const newArray = todos.filter((todo) => id !== todo.id);
    setTodo(newArray);
  };

  const handleChangeInputs = (id, inputs) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...inputs, editMode: false };
      }

      return todo;
    });
    setTodo(newArray);
  };

  const handleChange = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editMode: true };
      }
      return todo;
    });
    setTodo(newArray);
  };

  const handleCancelEdit = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editMode: false };
      }
      return todo;
    });
    setTodo(newArray);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TaskList
        todos={todos}
        handleDelete={handleDelete}
        handleChangeInputs={handleChangeInputs}
        handleChange={handleChange}
        onCancelEdit={handleCancelEdit}
      />
      <AddTask add={handleAdd} />
    </div>
  );
};

export default App;
