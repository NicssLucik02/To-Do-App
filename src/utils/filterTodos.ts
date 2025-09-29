import { FilterStatus } from '../types/enums';
import { Todo } from '../types/types';

export const filterTodos = (
  todos: Todo[],
  activeFilterStatus: FilterStatus,
) => {
  switch (activeFilterStatus) {
    case FilterStatus.Active:
      return todos.filter(todo => !todo.completed);

    case FilterStatus.Completed:
      return todos.filter(todo => todo.completed);

    default:
      return todos;
  }
};
