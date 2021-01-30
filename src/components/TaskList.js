import React from "react";
import Task from "./Task";

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

  return <div>{TaskLists}</div>;
};

export default TaskList;
