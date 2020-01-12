import React, { FunctionComponent } from "react";
import { TodoItem } from "ui/orgs/Todos/mols/TodoItem";
import { Todo } from "types";

interface Props {
  todos: Todo[];
  onToggle?: (todoId: Todo["id"]) => void;
  onDelete?: (todoId: Todo["id"]) => void;
}

export const TodoList: FunctionComponent<Props> = function TodoList({
  todos,
  onToggle,
  onDelete
}) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
