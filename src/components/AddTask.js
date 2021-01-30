import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddTask.css";

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
      <div className="AddTask_wrapper">
        <form className="AddTask_form" onSubmit={addTask}>
          <div className="AddTask_inputWrapper">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={todo.title}
              onChange={handleChange}
            />
          </div>
          <div className="AddTask_inputWrapper">
            <input
              type="text"
              placeholder="description"
              name="description"
              value={todo.description}
              onChange={handleChange}
            />
          </div>
          <div className="AddTask_inputWrapper">
            <input
              type="text"
              placeholder="created_by"
              name="createdBy"
              value={todo.createdBy}
              onChange={handleChange}
            />
          </div>
          <div className="AddTask_buttonsWrapper">
            <button className="AddTask_btn_success" type="submit">
              Create
            </button>
            <button
              className="AddTask_btn_danger"
              type="button"
              onClick={resetInputsHandle}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddTask;
