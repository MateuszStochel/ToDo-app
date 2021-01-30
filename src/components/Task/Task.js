import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskEditMode from "./subcomponents/TaskEditMode";
import "./Task.css";

const Task = ({
  title,
  description,
  createdBy,
  handleDelete,
  id,
  editMode,
  handleChange,
  handleChangeInputs,
  onCancelEdit,
}) => {
  const [inputs, handleInputs] = useState({
    title: "",
    description: "",
    createdBy: "",
  });
  const handleInput = (event) => {
    const { value, name } = event.target;
    handleInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className="task_wrapper">
      {editMode && (
        <TaskEditMode
          handleInput={handleInput}
          inputs={{ ...inputs }}
          editMode={editMode}
          handleChangeInputs={handleChangeInputs}
          onCancelEdit={onCancelEdit}
          id={id}
        />
      )}
      {!editMode && (
        <>
          <div className="task_par_wrapper">
            <p>{title} </p>
            <p>{description}</p>
            <p>{createdBy}</p>
          </div>
          <div className="task_buttons_wrapper">
            <button
              className="task_btn_danger"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
            <button
              className="task_btn_edit"
              onClick={() => handleChange(id, editMode)}
            >
              Edit
            </button>
            <button className="task_btn_success">Done</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
