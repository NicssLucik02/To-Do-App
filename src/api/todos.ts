import { Todo } from '../types/types';
import { client } from '../utils/fetchClient';
import { USER_ID } from '../types/types';

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const addTodos = (data: Todo) => {
  return client.post<Todo>(`/todos`, data);
};

export const deleteTodos = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodos = (data: Todo, todoId: number) => {
  return client.patch(`/todos/${todoId}`, data);
};
