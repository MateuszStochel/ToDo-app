import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskEditMode from "./TaskEditMode";
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
    <div>
      {editMode && (
        <TaskEditMode
          handleInput={handleInput}
          inputs={{ ...inputs }}
          editMode={editMode}
          title={title}
          description={description}
          createdBy={createdBy}
          handleDelete={handleDelete}
          handleChange={handleChange}
          handleChangeInputs={handleChangeInputs}
          onCancelEdit={onCancelEdit}
          id={id}
        />
      )}
      {!editMode && (
        <>
          <p>{title} </p>
          <p>{description}</p>
          <p>{createdBy}</p>
          <div>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => handleChange(id, editMode)}>Edit</button>
            <button>Done</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
