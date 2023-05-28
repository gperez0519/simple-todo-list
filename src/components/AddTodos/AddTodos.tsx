import React, { useState } from "react";

interface Props {
  addTodos: (task: string) => void;
}

const AddTodos: React.FC<Props> = ({ addTodos }) => {
  const [taskVal, setTaskVal] = useState("");

  return (
    <div>
      <input
        type="text"
        id="task"
        onChange={(e) => setTaskVal(e.target.value)}
        value={taskVal}
        className="taskInput"
      />
      <button
        onClick={() => {
          addTodos(taskVal);
          setTaskVal("");
        }}
        className="btnAddTask"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTodos;
