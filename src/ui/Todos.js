import React, { useMemo } from "react";
import { Route, Redirect } from "react-router-dom";
import { MainSection } from "ui/layout";
import { PageControls } from "ui/PageControls";
import { TodoAdder } from "ui/TodoAdder";
import { TodoList } from "ui/TodoList";
import { useTodosService } from "services/todos";

function TodoDescription({ match }) {
  const { params } = match;
  const { todoId } = params;
  const { todos } = useTodosService();
  const todo = useMemo(() => todos.find(todo => todo.id === +todoId), [
    todos,
    todoId
  ]);
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
      <Route path="/todos/:todoId" component={TodoDescription} />
    </MainSection>
  );
}
