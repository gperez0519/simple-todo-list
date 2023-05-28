import React from "react";

import "./TodosHeader.scss";

const TodosHeader = () => {
  return (
    <div>
      <span className="todosHeader">Todos</span>
      <p className="todosDescription">Use this list to add your todo tasks.</p>
    </div>
  );
};

export default TodosHeader;
