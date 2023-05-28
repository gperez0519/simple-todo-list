import React, { useState } from "react";
import { Todos } from "../../types/types";
import "./TodosList.scss";
import classNames from "classnames";

interface Props {
  todos: Todos[];
  updateTodo: (todo: Todos) => void;
}

const TodosList: React.FC<Props> = ({ todos, updateTodo }) => {
  return (
    <div className="todosListContainer">
      <ul className="todosList">
        {todos &&
          todos.map((todo) => (
            <li
              key={todo.id}
              className={classNames("todo", todo.complete ? "crossout" : "")}
            >
              <label>
                <input type="checkbox" onChange={() => updateTodo(todo)} />
              </label>
              {todo.task}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodosList;
