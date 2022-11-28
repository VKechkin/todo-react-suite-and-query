import { TTodo } from "@types";

export interface IPropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export interface IPropsMain {
  todos: TTodo[];
  setTodos: (todos: TTodo[]) => any;
}

export interface IPropsTodoList {
  todos: TTodo[];
}

export interface IPropsTodo {
  todo: TTodo;
  count: number;
}

export interface IPropsError {
  errorMessage: string;
}
