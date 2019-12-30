import React from "react";
import { MainSection } from "ui/layout";
import { PageControls } from "ui/PageControls";
import { TodoAdder } from "ui/TodoAdder";
import { TodoList } from "ui/TodoList";
import { TodoDescription } from "ui/TodoDescription";
import { useTodosService } from "services/todos";

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
