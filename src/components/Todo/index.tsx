import React from "react";

import { Checkbox } from "rsuite";

import editIcon from "@assets/icon/edit.png";
import deleteIcon from "@assets/icon/delete.png";

import { IPropsTodo } from "@interfaces";

import "./style.scss";

const Todo: React.FC<IPropsTodo> = ({ todo, count }) => {
  const { title, completed } = todo;

  return (
    <div className="todo">
      <div className="todo__part">
        <div className="todo__count">№ {count}</div>
        <Checkbox checked={completed} />
      </div>
      <div className="todo__text">{title} </div>
      <div className="todo__part">
        <img src={editIcon} alt="update"></img>
        <img src={deleteIcon} alt="delete"></img>
      </div>
    </div>
  );
};

export default Todo;
