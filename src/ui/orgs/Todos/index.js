import React, { useEffect } from 'react';
import { MainSection } from 'ui/mols';
import { PageControls } from './cells/PageControls';
import { TodoAdder } from './cells/TodoAdder';
import { TodoList } from './cells/TodoList';
import { TodoDescription } from './cells/TodoDescription';
import { useTodosService } from 'services/todos';

export function Todos() {
  const {
    addTodo,
    todos,
    toggleTodo,
    deleteTodo,
    markAllAsDone,
    deleteDone,
    fetchTodos,
  } = useTodosService();
  useEffect(() => void fetchTodos(), [fetchTodos]);
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

export default Todos;
