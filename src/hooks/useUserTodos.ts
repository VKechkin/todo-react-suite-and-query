import { todoService } from "@services/todo.service";
import { useQuery } from "react-query";

import { TTodo } from "@types";

export const useUserTodos = (
  id: string,
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>
) => {
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(["todo list", id], () => todoService.getByUserId(id), {
    onSuccess: ({ data }) => {
      setTodos(data);
    },
    onError: (error: any) => {
      console.log("error", error.message);
    },
  });

  return { isLoading, error, response };
};
