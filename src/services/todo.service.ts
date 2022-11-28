import { requestInstance } from "@utils";

import { TTodo } from "@types";

export const todoService = {
  async getAll() {
    return requestInstance.get<TTodo[]>(`todos`);
  },
  async createTodo(data: TTodo) {
    return requestInstance.post(`todos`, data);
  },
  async getByUserId(id: string) {
    return requestInstance.get<TTodo[]>(`todos?userId=${id}`);
  },
};
