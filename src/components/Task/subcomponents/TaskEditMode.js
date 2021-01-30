import React from "react";

const EditInput = ({ ...props }) => {
  return (
    <div className="AddTask_inputWrapper">
      <input type="text" {...props} />
    </div>
  );
};

const TaskEditMode = ({
  handleInput,
  inputs,
  handleChangeInputs,
  id,
  onCancelEdit,
}) => {
  console.log();

  const editInputs = Object.entries(inputs).map((fieldName) => (
    <EditInput
      onChange={handleInput}
      value={fieldName[1]}
      name={fieldName[0]}
    />
  ));
  return (
    <React.Fragment>
      {editInputs}

      <div className="AddTask_buttonsWrapper">
        <button
          className="task_btn_edit"
          onClick={() => handleChangeInputs(id, inputs)}
        >
          Edit
        </button>
        <button className="AddTask_btn_danger" onClick={() => onCancelEdit(id)}>
          Cancel
        </button>
      </div>
    </React.Fragment>
  );
};

export default TaskEditMode;
