import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialTodo = {
  title: "",
  description: "",
  createdBy: "",
};

const AddTask = ({ add }) => {
  const [todo, setTodo] = useState(initialTodo);

  const addTask = (event) => {
    event.preventDefault();

    add({ ...todo, id: uuidv4(), editMode: false, active: false });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const resetInputsHandle = (event) => {
    setTodo(initialTodo);
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={addTask}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={todo.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            value={todo.description}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="created_by"
            name="createdBy"
            value={todo.createdBy}
            onChange={handleChange}
          />
          <button type="submit">Create</button>
          <button type="button" onClick={resetInputsHandle}>
            Reset
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddTask;
