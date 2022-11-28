import React from "react";

import NewTodo from "@components/NewTodo";
import TodoList from "@components/TodoList";

import { IPropsMain } from "@interfaces";

import "./style.scss";

const Main: React.FC<IPropsMain> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <main className="main-content">
        <NewTodo todos={todos} />
        <TodoList todos={todos} />
      </main>
    </div>
  );
};

export default Main;
