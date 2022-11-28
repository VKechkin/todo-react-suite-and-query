import React, { useState } from "react";
import { useMutation } from "react-query";

import { Button, Content, Form, ButtonToolbar } from "rsuite";

import { TTodo } from "@types";

import "rsuite/dist/rsuite.min.css";

import "./style.scss";
import { todoService } from "@services/todo.service";

const NewTodo = ({ todos }) => {
  const [formValue, setFormValue] = useState({
    userId: 1,
    title: "",
    completed: false,
  });

  const { isLoading, mutateAsync } = useMutation(
    "create todo",
    (formValue) => {
      todoService.createTodo(formValue);
    },
    {
      onSuccess: () => {
        console.log("Add");
      },
      onError: (error) => {
        console.log("error", error.message);
      },
    }
  );

  const addNewToDo = async (value) => {
    await mutateAsync(value);
    setFormValue({
      title: "",
      completed: false,
    });
  };

  return (
    <Content>
      <Form fluid onChange={setFormValue} formValue={formValue}>
        <Form.Group controlId="title">
          <Form.ControlLabel>What do you want to do?</Form.ControlLabel>
          <Form.Control name="title" />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button
              disabled={isLoading}
              onClick={() => addNewToDo(formValue)}
              appearance="primary"
            >
              Add
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </Content>
  );
};

export default NewTodo;
