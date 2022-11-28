import React from "react";

import Todo from "@components/Todo";

import { IPropsTodoList } from "@interfaces";

import "./style.scss";

const TodoList: React.FC<IPropsTodoList> = ({ todos }) => {
  let count = 0;

  return (
    <div className="todo-list">
      {todos.map((item) => {
        ++count;
        return <Todo key={`key-${count}`} todo={item} count={count} />;
      })}
    </div>
  );
};

export default TodoList;
