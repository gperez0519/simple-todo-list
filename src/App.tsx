import React, { useState } from "react";
import "./App.css";
import TodosHeader from "./components/TodosHeader/TodosHeader";
import TodosList from "./components/TodosList/TodosList";
import { Todos } from "./types/types";
import AddTodos from "./components/AddTodos/AddTodos";

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodos = (task: string) => {
    console.log(`Task detected from add todos: ${task}`);
    if (task) {
      const currentTodos: Todos[] = [...todos];

      currentTodos.push({
        id: currentTodos.length + 1,
        task,
        complete: false,
      });

      console.log(`Current todos with new task: `, currentTodos);

      setTodos(currentTodos);
    }
  };

  const updateTodo = (todo: Todos): void => {
    console.log("update todo detected: ", todo);
    let filteredTodos = todos.map((certainTodo) => {
      if (certainTodo.id === todo.id) {
        return {
          ...certainTodo,
          complete: !certainTodo.complete,
        };
      }
      return certainTodo;
    });

    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <TodosHeader />
      <TodosList {...{ todos, updateTodo }} />
      <AddTodos {...{ addTodos }} />
    </div>
  );
}

export default App;
