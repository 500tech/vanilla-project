import React from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { useTodosService } from "services/todos";

export function TodoDescription() {
  const match = useRouteMatch("/todos/:todoId");
  const { todos } = useTodosService();
  if (!match || !match.isExact) {
    return null;
  }

  const { todoId } = match.params;
  const todo = todos.find(todo => todo.id === +todoId);

  if (!todo) {
    return <Redirect to="/todos" />;
  }
  return (
    <h3>
      <code>{JSON.stringify(todo)}</code>
    </h3>
  );
}
