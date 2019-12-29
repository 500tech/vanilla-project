import React from "react";
import { Route, Redirect } from "react-router-dom";
import { MainSection } from "ui/layout";
import { PageControls } from "ui/PageControls";
import { TodoAdder } from "ui/TodoAdder";
import { TodoList } from "ui/TodoList";

export function Todos({
  addTodo,
  todos,
  toggleTodo,
  deleteTodo,
  markAllAsDone,
  deleteDone
}) {
  return (
    <MainSection heading="My Todos List">
      <TodoAdder onAddTodo={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <PageControls
        todos={todos}
        onMarkAllAsDone={markAllAsDone}
        onDeleteDone={deleteDone}
      />
      <Route
        path="/todos/:todoId"
        render={({ match }) => {
          const { params } = match;
          const { todoId } = params;
          const todo = todos.find(todo => todo.id === +todoId);
          if (!todo) {
            return <Redirect to="/todos" />;
          }
          return (
            <h3>
              <code>{JSON.stringify(todo)}</code>
            </h3>
          );
        }}
      />
    </MainSection>
  );
}
