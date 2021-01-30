import React from "react";
import Task from "./Task/Task";
import "./TaskList.css";

const TaskList = ({
  todos,
  handleDelete,
  handleChange,
  handleChangeInputs,
  onCancelEdit,
}) => {
  const TaskLists = todos.map((todo) => (
    <Task
      {...todo}
      handleDelete={handleDelete}
      handleChange={handleChange}
      handleChangeInputs={handleChangeInputs}
      onCancelEdit={onCancelEdit}
    />
  ));

  return (
    <div>
      <h1 className="TaskList__mainTitle">Todo App</h1>
      <div className="TaskList__titles">
        <h3>Title</h3>
        <h3>Description</h3>
        <h3>Created_By</h3>
        <h3>Options</h3>
      </div>
      {TaskLists}
    </div>
  );
};

export default TaskList;
