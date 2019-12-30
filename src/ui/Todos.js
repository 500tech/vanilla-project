import React from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { MainSection } from "ui/layout";
import { PageControls } from "ui/PageControls";
import { TodoAdder } from "ui/TodoAdder";
import { TodoList } from "ui/TodoList";
import { useTodosService } from "services/todos";

function TodoDescription() {
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

export function Todos() {
  const {
    addTodo,
    todos,
    toggleTodo,
    deleteTodo,
    markAllAsDone,
    deleteDone
  } = useTodosService();
  return (
    <MainSection heading="My Todos List">
      <TodoAdder onAddTodo={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <PageControls
        todos={todos}
        onMarkAllAsDone={markAllAsDone}
        onDeleteDone={deleteDone}
      />
      <TodoDescription />
    </MainSection>
  );
}
