import React from "react";

const EditInput = ({ ...props }) => {
  return <input type="text" {...props} />;
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

      <div>
        <button onClick={() => handleChangeInputs(id, inputs)}>Edit</button>
        <button onClick={() => onCancelEdit(id)}>Cancel</button>
      </div>
    </React.Fragment>
  );
};

export default TaskEditMode;
